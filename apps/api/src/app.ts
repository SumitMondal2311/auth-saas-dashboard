import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { APIError } from "./configs/api-error.js";
import { logger } from "./configs/logger.js";
import { router } from "./routes/our-user/index.js";

export const createServer = () => {
    const app: Express = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use((req: Request, _res: Response, next: NextFunction) => {
        logger.info(`[${req.method}] ${req.path}`);
        next();
    });

    app.use(helmet());
    app.use(cors());
    app.use(cookieParser());

    // api routes
    app.use("/api/v1", router);

    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        if (err instanceof APIError) {
            return res.status(err.statusCode).json({
                ...err.toJSON(),
            });
        }

        logger.error(err);
        res.status(500).json({
            message: "Internal server error: something went wrong",
        });
    });

    return app;
};
