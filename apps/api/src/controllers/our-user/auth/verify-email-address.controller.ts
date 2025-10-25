import { verificationCodeSchema } from "@repo/validation";
import { NextFunction, Request, Response } from "express";
import { APIError } from "../../../configs/api-error.js";
import { IS_PROD, SESSION_EXPIRY } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { normalizedIP } from "../../../helpers/normalized-ip.js";
import { verifyEmailAddressService } from "../../../services/our-user/auth/verify-email-address.service.js";
import { SignUpCookie } from "../../../types/sign-up-cookie.js";

export const verifyEmailAddressController = handleAsync(
    async (
        req: Request & {
            cookies: { __sign_up?: SignUpCookie };
        },
        res: Response,
        _next: NextFunction
    ) => {
        const { __sign_up } = req.cookies;
        if (!__sign_up) {
            throw new APIError(400, {
                message: "Unprocessable action",
                code: "invalid_action",
            });
        }

        if (new Date() >= __sign_up.expiresAt) {
            throw new APIError(410, {
                message: "This sign up attempt has expired. Please go back and try again.",
                code: "sign_up_expired",
            });
        }

        const { success, error, data } = verificationCodeSchema.safeParse(req.body);
        if (!success) {
            throw new APIError(400, {
                message: error.issues[0].message,
                code: "validation_failed",
            });
        }

        const { code } = data;
        const { sessionId } = await verifyEmailAddressService({
            ipAddress: normalizedIP(req.ip || "unknown"),
            userAgent: req.headers["user-agent"] || "unknown",
            code,
            signUpId: __sign_up.id,
        });

        res.status(200)
            .clearCookie("__sign_up")
            .cookie("__session_id", sessionId, {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: SESSION_EXPIRY * 1000,
            })
            .json({ success: true });
    }
);
