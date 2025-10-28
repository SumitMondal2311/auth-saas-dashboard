import { prisma } from "@repo/db";
import { hash, verify } from "argon2";
import { APIError } from "../../../configs/api-error.js";
import {
    MAX_ACTIVE_SESSIONS,
    SESSION_CACHE_EXPIRY,
    SESSION_EXPIRY,
} from "../../../configs/constant.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";
import { redis } from "../../../lib/redis.js";
import { SessionCache } from "../../../types/session-cache.js";

export const signInService = async ({
    emailAddress,
    ipAddress,
    password,
    userAgent,
}: {
    userAgent: string;
    password: string;
    ipAddress: string;
    emailAddress: string;
}): Promise<{
    sessionId: string;
}> => {
    const emailRecord = await prisma.ourUserEmail.findFirst({
        where: { address: emailAddress, verified: true },
        select: {
            user: {
                select: { id: true, locked: true, banned: true },
            },
        },
    });

    const dummyPasswordHash = await hash("dummy-password");
    if (!emailRecord) {
        await verify(dummyPasswordHash, password); // for preventing timing attacks
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    const { user } = emailRecord;
    const passwordRecord = await prisma.ourUserPassword.findUnique({
        where: { userId: user.id },
        select: { hash: true },
    });

    if (!passwordRecord) {
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    if ((await verify(passwordRecord.hash, password)) === false) {
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    if (user.locked || user.banned) {
        // this message is intentional to prevent user enumeration
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    // LRU based session deletion for reaching max limit
    const sessionRecords = await prisma.ourUserSession.findMany({
        where: {
            expiresAt: { gt: new Date() },
            userId: user.id,
        },
        orderBy: { lastActiveAt: "asc" },
        select: { id: true },
    });

    if (sessionRecords.length >= MAX_ACTIVE_SESSIONS) {
        await prisma.ourUserSession.deleteMany({
            where: { id: sessionRecords[0].id },
        });
    }

    const session = await prisma.$transaction(async (tx) => {
        await tx.ourUser.update({
            where: { id: user.id },
            data: { lastSignInAt: new Date() },
            select: { id: true },
        });
        return await tx.ourUserSession.create({
            data: {
                ipAddress,
                userAgent,
                expiresAt: addSecondsToNow(SESSION_EXPIRY),
                user: { connect: { id: user.id } },
            },
            select: {
                id: true,
                expiresAt: true,
                user: {
                    select: {
                        locked: true,
                        banned: true,
                        lockExpiresAt: true,
                    },
                },
            },
        });
    });

    // caching session
    await redis.set(
        `__session:${session.id}`,
        JSON.stringify(session as SessionCache),
        "EX",
        SESSION_CACHE_EXPIRY
    );

    return { sessionId: session.id };
};
