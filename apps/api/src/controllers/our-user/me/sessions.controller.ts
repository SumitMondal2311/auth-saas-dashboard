import { Request } from "express";
import { IS_PROD } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { sessionsService } from "../../../services/our-user/me/sessions.service.js";
import { AuthContext } from "../../../types/auth-context.js";

export const sessionsController = {
    get: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
                params: { id: string };
            },
            res
            // eslint-disable-next-line @typescript-eslint/require-await
        ) => {
            const {
                session: { user: _, ...rest },
            } = req.authContext;

            res.json({ session: rest });
        }
    ),
    getAll: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
            },
            res
        ) => {
            const {
                session: { user },
            } = req.authContext;

            const { sessions } = await sessionsService.getAll(user.id);

            res.json({ sessions });
        }
    ),
    delete: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
                params: { id: string };
            },
            res
        ) => {
            const { session } = req.authContext;
            await sessionsService.delete({
                userId: session.user.id,
                sessionId: req.params.id,
            });

            if (session.id === req.params.id) {
                return res
                    .clearCookie("__session_id", {
                        secure: IS_PROD,
                        httpOnly: true,
                        sameSite: "lax",
                        maxAge: 0,
                    })
                    .json({ success: true });
            }

            res.json({ success: true });
        }
    ),
    deleteAll: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
            },
            res
        ) => {
            const {
                session: { user },
            } = req.authContext;
            await sessionsService.deleteAll(user.id);

            return res
                .clearCookie("__session_id", {
                    secure: IS_PROD,
                    httpOnly: true,
                    sameSite: "lax",
                    maxAge: 0,
                })
                .json({ success: true });
        }
    ),
};
