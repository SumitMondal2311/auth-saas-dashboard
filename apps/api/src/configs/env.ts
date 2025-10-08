import { config } from "dotenv";
import { resolve } from "path";
import { z } from "zod";

const NODE_ENV = process.env.NODE_ENV;
config({
    path: resolve(
        process.cwd(),
        NODE_ENV === "development"
            ? ".env.development"
            : NODE_ENV === "test"
              ? ".env.test"
              : NODE_ENV === "production"
                ? ".env.production"
                : ".env.local"
    ),
});

export const env = z
    .object({
        DB_MAX_RETRIES: z.string().transform(Number),
        PORT: z.string().transform(Number),
        DB_URL: z.string(),
    })
    .parse(process.env);
