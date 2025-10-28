import { ApplicationSchema } from "@repo/types";
import { applicationSchema } from "@repo/validation";
import { Request, Response } from "express";
import { APIError } from "../../../configs/api-error.js";
import { handleAsync } from "../../../helpers/handle-async.js";
import { applicationsService } from "../../../services/our-user/me/applications.service.js";
import { AuthContext } from "../../../types/auth-context.js";

export const applicationsController = {
    create: handleAsync(
        async (
            req: Request & {
                body: ApplicationSchema;
                authContext: AuthContext;
            },
            res: Response
        ) => {
            const { success, error, data } = applicationSchema.safeParse(req.body);
            if (!success) {
                throw new APIError(400, {
                    message: error.issues[0].message,
                    code: "validation_failed",
                });
            }

            const {
                session: { user },
            } = req.authContext;

            const { publicKey, secretKey } = await applicationsService.create({
                ...data,
                userId: user.id,
            });

            res.status(201).json({ publicKey, secretKey });
        }
    ),
    regenerateKeys: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
                params: { id: string };
            },
            res: Response
        ) => {
            const {
                session: { user },
            } = req.authContext;

            const { publicKey, secretKey } = await applicationsService.regenerateKeys({
                userId: user.id,
                applicationId: req.params.id,
            });

            res.json({ publicKey, secretKey });
        }
    ),
    delete: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
                params: { id: string };
            },
            res: Response
        ) => {
            const {
                session: { user },
            } = req.authContext;

            await applicationsService.delete({
                userId: user.id,
                applicationId: req.params.id,
            });

            res.json({ success: true });
        }
    ),
};
