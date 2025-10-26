import { NextFunction, Request, Response } from "express";

export const handleAsync =
    <R extends Request>(func: (req: R, res: Response, next: NextFunction) => Promise<any>) =>
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(func(req as R, res, next)).catch(next);
