import { OurUser, OurUserSession } from "@repo/db";

export type SessionCache = Pick<OurUserSession, "id" | "expiresAt"> & {
    user: Pick<OurUser, "locked" | "lockExpiresAt" | "banned">;
};
