import { Application, OurUser, OurUserBackupCode, OurUserEmail, OurUserSession } from "@repo/db";

export type AuthContext = {
    session: Omit<OurUserSession, "userId"> & {
        user: OurUser & {
            applications: Pick<Application, "name" | "id" | "publicKey" | "updatedAt">[];
            email: Pick<OurUserEmail, "address" | "verified">;
            backupCodes: Pick<OurUserBackupCode, "used">[];
        };
    };
};
