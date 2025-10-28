import { Request, Response } from "express";
import { handleAsync } from "../../../helpers/handle-async.js";
import { AuthContext } from "../../../types/auth-context.js";

export const meController = {
    get: handleAsync(
        async (
            req: Request & {
                authContext: AuthContext;
            },
            res: Response
            // eslint-disable-next-line @typescript-eslint/require-await
        ) => {
            const {
                session: { user },
            } = req.authContext;

            res.json({ user });
        }
    ),
};
