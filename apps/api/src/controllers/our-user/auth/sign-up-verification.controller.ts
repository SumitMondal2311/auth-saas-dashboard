import { VerificationCodeSchema } from "@repo/types";
import { verificationCodeSchema } from "@repo/validation";
import { Request } from "express";
import { APIError } from "../../../configs/api-error.js";
import { IS_PROD, SESSION_EXPIRY } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { normalizedIP } from "../../../helpers/normalized-ip.js";
import { signUpVerificationService } from "../../../services/our-user/auth/sign-up-verification.service.js";

export const signUpVerificationController = handleAsync(
    async (
        req: Request & {
            body: VerificationCodeSchema;
            params: { token: string };
        },
        res
    ) => {
        const { success, error, data } = verificationCodeSchema.safeParse(req.body);
        if (!success) {
            throw new APIError(400, {
                message: error.issues[0].message,
                code: "validation_failed",
            });
        }

        const { sessionId } = await signUpVerificationService({
            ipAddress: normalizedIP(req.ip || "unknown"),
            userAgent: req.headers["user-agent"] || "unknown",
            ...data,
            signUpToken: req.params.token,
        });

        res.status(200)
            .cookie("__session_id", sessionId, {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: SESSION_EXPIRY * 1000,
            })
            .json({ success: true });
    }
);
