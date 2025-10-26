import { AuthSchema } from "@repo/types";
import { authSchema } from "@repo/validation";
import { Request } from "express";
import { APIError } from "../../../configs/api-error.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { signUpService } from "../../../services/our-user/auth/sign-up.service.js";

export const signUpController = handleAsync(
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

        const { token } = await signUpService(data);

        res.status(201).json({ token });
    }
);
