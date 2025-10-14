import { verificationCodeSchema } from "@repo/validation";
import { NextFunction, Request, Response } from "express";
import { APIError } from "../../../configs/api-error.js";
import { IS_PROD, SESSION_EXPIRY } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { normalizedIP } from "../../../helpers/normalized-ip.js";
import { verifyEmailAddressService } from "../../../services/our-user/auth/verify-email-address.service.js";

export const verifyEmailAddressController = handleAsync(
    async (
        req: Request & {
            cookies: { __sign_up_id?: string };
        },
        res: Response,
        _next: NextFunction
    ) => {
        const { __sign_up_id } = req.cookies;
        if (!__sign_up_id) {
            throw new APIError(400, {
                message: "Unprocessable action",
                code: "invalid_action",
            });
        }

        const { success, error, data } = verificationCodeSchema.safeParse(req.body);
        if (!success) {
            throw new APIError(400, {
                message: error.issues[0].message,
                code: "invalid_credential",
            });
        }

        const { code } = data;
        const { sessionId } = await verifyEmailAddressService({
            ipAddress: normalizedIP(req.ip || "unknown"),
            userAgent: req.headers["user-agent"] || "unknown",
            code,
            signUpId: __sign_up_id,
        });

        res.status(200)
            .clearCookie("__sign_up_id")
            .cookie("__session_id", sessionId, {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: SESSION_EXPIRY * 1000,
            })
            .json({ success: true });
    }
);
