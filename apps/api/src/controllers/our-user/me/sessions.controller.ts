import { Request } from "express";
import { IS_PROD } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { sessionsService } from "../../../services/our-user/me/sessions.service.js";
import { AuthContext } from "../../../types/auth-context.js";

export const sessionsController = {
    delete: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
                params: { session_id: string };
            },
            res
        ) => {
            const targetSessionId = req.params.session_id;
            const { session } = req.authContext;

            await sessionsService.delete({
                userId: session.user.id,
                sessionId: targetSessionId,
            });

            if (session.id === targetSessionId) {
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
