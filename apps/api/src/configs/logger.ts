import { pino } from "pino";
import { IS_PROD } from "./constant.js";

export const logger = pino({
    level: IS_PROD ? "warn" : "info",
    base: {
        pid: process.pid,
    },
    transport: IS_PROD
        ? undefined
        : {
              target: "pino-pretty",
              options: {
                  translateTime: "SYS:HH:MM:ss Z",
                  ignore: "hostname,pid",
              },
          },
});
