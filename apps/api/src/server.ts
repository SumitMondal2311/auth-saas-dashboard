import { createServer } from "./app.js";
import { connectDB, disconnectDB } from "./configs/db-lifecycle.js";
import { env } from "./configs/env.js";
import { logger } from "./configs/logger.js";

await (async () => {
    try {
        await connectDB();
        const app = createServer();
        const server = app.listen(env.PORT, () => {
            logger.info(`✅ Server is ready on port: ${env.PORT}`);
        });

        let shuttingDown = false;

        ["SIGINT", "SIGTERM"].forEach((signal) =>
            process.on(signal, () => {
                if (shuttingDown) return;
                shuttingDown = true;

                console.info(`❗️ Received ${signal}, shutting down server...`);

                server.close(
                    () =>
                        void (async () => {
                            console.info("✅ Server closed gracefully");
                            await disconnectDB();
                            process.exit(0);
                        })()
                );
            })
        );

        process.on("uncaughtException", (error: Error) => {
            console.error(`❎ Uncaught Exception ${error}`);
            process.exit(1);
        });

        process.on("unhandledRejection", (error: Error) => {
            console.error(`❎ Unhandled Rejected ${error}`);
            process.exit(1);
        });
    } catch (_) {
        console.error("❎ Failed to initialize http server");
        process.exit(1);
    }
})();
