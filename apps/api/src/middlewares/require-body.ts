import { NextFunction, Request, Response } from "express";
import { APIError } from "../configs/api-error.js";

export const requireBodyMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
    if (typeof req.body !== "object") {
        throw new APIError(400, {
            message: "Required object, received null",
            code: "missing_body",
        });
    }

    if (Object.keys(req.body).length <= 0) {
        throw new APIError(400, {
            message: "Required input, received null",
            code: "missing_input",
        });
    }

    next();
};
