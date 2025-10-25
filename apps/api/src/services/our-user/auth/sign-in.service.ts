import { prisma } from "@repo/db";
import { hash, verify } from "argon2";
import { APIError } from "../../../configs/api-error.js";
import { MAX_ACTIVE_SESSIONS, SESSION_EXPIRY } from "../../../configs/constant.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";

export const signInService = async ({
    emailAddress,
    ipAddress,
    password,
    userAgent,
}: {
    userAgent: string;
    password: string;
    ipAddress: string;
    emailAddress: string;
}): Promise<{
    sessionId: string;
}> => {
    const emailRecord = await prisma.ourUserEmail.findFirst({
        where: {
            address: emailAddress,
            verified: true,
        },
        select: { userId: true },
    });

    const dummyPasswordHash = await hash("dummy-password");
    if (!emailRecord) {
        await verify(dummyPasswordHash, password); // for preventing timing attacks
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    const { userId } = emailRecord;
    const passwordRecord = await prisma.ourUserPassword.findUnique({
        where: { userId },
        select: { hash: true },
    });

    if (!passwordRecord) {
        // for preventing user enumeration
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    if ((await verify(passwordRecord.hash, password)) === false) {
        throw new APIError(422, {
            message: "Incorrect email address or password",
            code: "invalid_credential",
        });
    }

    // LRU based session deletion for reaching max limit
    const sessionRecords = await prisma.ourUserSession.findMany({
        where: {
            expiresAt: { gt: new Date() },
            userId,
        },
        orderBy: { lastActiveAt: "asc" },
        select: { id: true },
    });

    if (sessionRecords.length >= MAX_ACTIVE_SESSIONS) {
        await prisma.ourUserSession.deleteMany({
            where: { id: sessionRecords[0].id },
        });
    }

    const session = await prisma.ourUserSession.create({
        data: {
            ipAddress,
            userAgent,
            expiresAt: addSecondsToNow(SESSION_EXPIRY),
            user: { connect: { id: userId } },
        },
        select: { id: true },
    });

    return { sessionId: session.id };
};
