import { prisma } from "@repo/db";
import { Request } from "express";
import { APIError } from "../configs/api-error.js";
import { IS_PROD, SESSION_CACHE_EXPIRY, SESSION_EXPIRY } from "../configs/constant.js";
import { addSecondsToNow } from "../helpers/add-seconds-to-now.js";
import { handleAsync } from "../helpers/handle-async.js";
import { redis } from "../lib/redis.js";
import { AuthContext } from "../types/auth-context.js";
import { SessionCache } from "../types/session-cache.js";

export const requireAuthMiddleware = handleAsync(
    async (
        req: Request & {
            cookies: { __session_id?: string };
            authContext: AuthContext;
        },
        res,
        next
    ) => {
        const { __session_id } = req.cookies;
        if (!__session_id) {
            throw new APIError(401, {
                message: "Authorization required. Please sign in to get authorized.",
                code: "unauthorized",
            });
        }

        const sessionCache = await redis.get(`__session:${__session_id}`);
        let session: SessionCache;

        const clearSessionCookie = () => {
            res.clearCookie("__session_id", {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: 0,
            });
        };

        // hit the session cache or fallback to DB fetch
        if (sessionCache) {
            session = JSON.parse(sessionCache);
        } else {
            const sessionRecord = await prisma.ourUserSession.findUnique({
                where: { id: __session_id },
                select: {
                    id: true,
                    expiresAt: true,
                    user: {
                        select: { locked: true, lockExpiresAt: true, banned: true },
                    },
                },
            });

            if (!sessionRecord) {
                clearSessionCookie();
                throw new APIError(401, {
                    message: "Invalid session. Please sign in again.",
                    code: "unauthorized",
                });
            }

            session = sessionRecord;
        }

        const deleteSession = async () => {
            await redis.del(`__session:${session.id}`);
            await prisma.ourUserSession.deleteMany({
                where: { id: session.id },
            });
            clearSessionCookie();
        };

        if (new Date() >= session.expiresAt) {
            await deleteSession();
            throw new APIError(401, {
                message: "Session has expired. Please sign in again.",
                code: "unauthorized",
            });
        }

        if (session.user.banned) {
            await deleteSession();
            throw new APIError(403, {
                message:
                    "Your account is banned. If you think this was a mistake, please contact support on support@nexusdev.com",
                code: "account_banned",
            });
        }

        if (session.user.locked) {
            await deleteSession();
            throw new APIError(403, {
                message: `Your account is locked. You will be able to sign in again in ${Math.floor(
                    (session.user.lockExpiresAt?.getTime() ?? Date.now() - Date.now()) / (60 * 1000)
                )} minutes.`,
                code: "account_locked",
            });
        }

        const updatedSession = await prisma.ourUserSession.update({
            where: { id: __session_id },
            data: {
                expiresAt: addSecondsToNow(SESSION_EXPIRY),
                lastActiveAt: new Date(),
            },
            omit: { userId: true },
            include: {
                user: {
                    include: {
                        applications: {
                            select: { name: true, id: true, publicKey: true, updatedAt: true },
                        },
                        backupCodes: {
                            select: { used: true },
                        },
                        email: {
                            select: { address: true, verified: true },
                        },
                    },
                },
            },
        });

        if (!updatedSession.user.email) {
            throw new APIError(403, {
                message: "No email found linked with your account",
                code: "missing_email_linkage",
            });
        }

        // re-caching updated session
        await redis.set(
            `__session:${session.id}`,
            JSON.stringify({
                ...session,
                expiresAt: updatedSession.expiresAt,
            } as SessionCache),
            "EX",
            SESSION_CACHE_EXPIRY
        );

        // destructuring to denullify email
        const {
            user: { email, ...rest_user },
            ...rest_session
        } = updatedSession;

        req.authContext = {
            session: {
                ...rest_session,
                user: { email, ...rest_user },
            },
        };
        next();
    }
);
