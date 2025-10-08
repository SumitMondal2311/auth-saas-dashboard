import { createServer } from "./app.js";
import { env } from "./configs/env.js";
import { logger } from "./configs/logger.js";

const app = createServer();
const server = app.listen(env.PORT, () => {
    logger.info(`Server is ready on port: ${env.PORT}`);
});

let shuttingDown = false;

["SIGINT", "SIGTERM"].forEach((signal) =>
    process.on(signal, () => {
        if (shuttingDown) return;
        shuttingDown = true;

        console.info(`Received ${signal}, shutting down server...`);

        server.close(() => {
            console.info("Server closed gracefully");
            process.exit(0);
        });
    })
);

process.on("uncaughtException", (error: Error) => {
    console.error(`Uncaught Exception ${error}`);
    process.exit(1);
});

process.on("unhandledRejection", (error: Error) => {
    console.error(`Unhandled Rejected ${error}`);
    process.exit(1);
});
