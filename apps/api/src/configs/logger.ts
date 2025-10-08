import { pino } from "pino";

const NODE_ENV = process.env.NODE_ENV;
export const logger = pino({
    level: NODE_ENV === "production" ? "warn" : "info",
    base: {
        pid: process.pid,
    },
    transport:
        NODE_ENV === "production"
            ? undefined
            : {
                  target: "pino-pretty",
                  options: {
                      translateTime: "SYS:HH:MM:ss Z",
                      ignore: "hostname,pid",
                  },
              },
});
