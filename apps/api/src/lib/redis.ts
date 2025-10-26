import { Redis } from "ioredis";
import { env } from "../configs/env.js";
import { logger } from "../configs/logger.js";

export const redis = new Redis(env.REDIS_URL);

redis.on("connect", () => logger.info("✅ Redis connected successfully"));
redis.on("error", (err) => console.error(`❎ ${err.stack}`));
