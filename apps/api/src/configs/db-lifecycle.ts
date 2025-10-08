import { prisma } from "@shared/db";
import { setTimeout } from "timers/promises";
import { env } from "./env.js";
import { logger } from "./logger.js";

export const connectDB = async () => {
    try {
        await prisma.$connect();
        logger.info("Database connected successfully");
    } catch (_) {
        logger.warn("Failed initial database conenction");
        for (let attempt = 1; attempt <= env.DB_MAX_RETRIES; attempt++) {
            try {
                await prisma.$connect();
                logger.info("Reconnected to database successfully");
                return;
            } catch (_) {
                logger.warn(`Failed reconnecting to database on attempt ${attempt}`);
                if (attempt < env.DB_MAX_RETRIES) {
                    const wait = 2 ** attempt * 1000;
                    logger.info(`Retrying in ${wait / 1000}s...`);
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
    } catch (_error) {
        throw new Error("Failed to disconnect database.");
    }
};
