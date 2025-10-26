import { OurUser, OurUserEmail, OurUserSession } from "@repo/db";

export type AuthContext = {
    session: Omit<OurUserSession, "userId"> & {
        user: OurUser & {
            email: Pick<OurUserEmail, "address" | "verified">;
        };
    };
};
