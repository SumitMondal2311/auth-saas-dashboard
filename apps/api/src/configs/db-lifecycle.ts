import { prisma } from "@repo/db";
import { setTimeout } from "timers/promises";
import { IS_PROD } from "./constant.js";
import { logger } from "./logger.js";

const MAX_RECONNECTION_ATTEMPTS = IS_PROD ? 5 : 3;

export const connectDB = async () => {
    try {
        await prisma.$connect();
        logger.info("✅ Database connected successfully");
    } catch (_) {
        logger.warn("❎ Failed initial database conenction");
        for (let attempt = 1; attempt <= MAX_RECONNECTION_ATTEMPTS; attempt++) {
            try {
                await prisma.$connect();
                logger.info("Reconnected to database successfully");
                return;
            } catch (_) {
                logger.warn(`❎ Failed reconnecting to database on attempt ${attempt}`);
                if (attempt < MAX_RECONNECTION_ATTEMPTS) {
                    const wait = 2 ** attempt * 1000;
                    logger.info(`🔁 Retrying in ${wait / 1000}s...`);
                    await setTimeout(wait);
                }
            }
        }

        throw new Error("Database connection failed after multiple retries");
    }
};

export const disconnectDB = async () => {
    try {
        await prisma.$disconnect();
        console.info("Databse disconnected successfully");
    } catch (_) {
        throw new Error("Failed to disconnect database.");
    }
};
