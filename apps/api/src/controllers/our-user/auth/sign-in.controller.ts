import { AuthSchema } from "@repo/types";
import { authSchema } from "@repo/validation";
import { Request } from "express";
import { APIError } from "../../../configs/api-error.js";
import { IS_PROD, SESSION_EXPIRY } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { normalizedIP } from "../../../helpers/normalized-ip.js";
import { signInService } from "../../../services/our-user/auth/sign-in.service.js";

export const signInController = handleAsync(
    async (
        req: Request & {
            body: AuthSchema;
        },
        res
    ) => {
        const { success, error, data } = authSchema.safeParse(req.body);
        if (!success) {
            throw new APIError(400, {
                message: error.issues[0].message,
                code: "validation_failed",
            });
        }

        const { sessionId } = await signInService({
            ...data,
            userAgent: req.headers["user-agent"] || "unknown",
            ipAddress: normalizedIP(req.ip || "unknown"),
        });

        res.status(201)
            .cookie("__session_id", sessionId, {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: SESSION_EXPIRY * 1000,
            })
            .json({ success: true });
    }
);
