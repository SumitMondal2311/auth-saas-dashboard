import { SignUpSchema } from "@repo/types";
import { signUpSchema } from "@repo/validation";
import { NextFunction, Request, Response } from "express";
import { APIError } from "../../../configs/api-error.js";
import { IS_PROD, VERIFICATION_OTP_EXPIRY } from "../../../configs/constant.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { signUpService } from "../../../services/our-user/auth/sign-up.service.js";

export const signUpController = handleAsync(
    async (
        req: Request & {
            body: SignUpSchema;
        },
        res: Response,
        _next: NextFunction
    ) => {
        const { success, error, data } = signUpSchema.safeParse(req.body);
        if (!success) {
            throw new APIError(400, {
                message: error.issues[0].message,
                code: "invalid_credential",
            });
        }

        const { signUpId } = await signUpService(data);

        res.status(201)
            .cookie("__sign_up_id", signUpId, {
                secure: IS_PROD,
                httpOnly: true,
                sameSite: "lax",
                maxAge: VERIFICATION_OTP_EXPIRY * 1000,
            })
            .json({ success: true });
    }
);
