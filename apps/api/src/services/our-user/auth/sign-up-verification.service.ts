import { prisma } from "@repo/db";
import { verify } from "argon2";
import { APIError } from "../../../configs/api-error.js";
import { MAX_EMAIL_CODE_ATTEMPTS, SESSION_EXPIRY } from "../../../configs/constant.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";

export const signUpVerificationService = async ({
    signUpToken,
    code,
    ipAddress,
    userAgent,
}: {
    ipAddress: string;
    userAgent: string;
    code: string;
    signUpToken: string;
}): Promise<{
    sessionId: string;
}> => {
    const signUpRecord = await prisma.ourUserSignUp.findUnique({
        where: { token: signUpToken },
        select: {
            emailAddress: true,
            passwordHash: true,
            attempts: true,
            verificationCodeHash: true,
            expiresAt: true,
        },
    });

    if (!signUpRecord) {
        throw new APIError(400, {
            message: "No sign up attempt was found. Please go back and try again.",
            code: "invalid_action",
        });
    }

    const deleteSignUpRecord = async () => {
        await prisma.ourUserSignUp.deleteMany({
            where: { token: signUpToken },
        });
    };

    if (new Date() >= signUpRecord.expiresAt) {
        await deleteSignUpRecord();
        throw new APIError(410, {
            message: "This sign up attempt has expired. Please go back and try again.",
            code: "attempt_expired",
        });
    }

    const { emailAddress, passwordHash, verificationCodeHash } = signUpRecord;

    if (signUpRecord.attempts >= MAX_EMAIL_CODE_ATTEMPTS) {
        await deleteSignUpRecord();
        throw new APIError(403, {
            message: "Too many failed attempts. Please go back and try again.",
            code: "attempt_failed",
        });
    }

    await prisma.ourUserSignUp.update({
        where: { token: signUpToken },
        data: {
            attempts: { increment: 1 },
        },
    });

    if ((await verify(verificationCodeHash, code)) === false) {
        throw new APIError(422, {
            message: "Entered code is incorrect",
            code: "invalid_code",
        });
    }

    await prisma.ourUserSignUp.deleteMany({
        where: { emailAddress },
    });

    const { id: sessionId } = await prisma.$transaction(async (tx) => {
        const user = await tx.ourUser.create({
            data: {
                avatarUrl: "avatarUrl",
                email: {
                    create: { address: emailAddress, verified: true },
                },
                password: {
                    create: { hash: passwordHash },
                },
            },
            select: { id: true },
        });
        return tx.ourUserSession.create({
            data: {
                ipAddress,
                userAgent,
                expiresAt: addSecondsToNow(SESSION_EXPIRY),
                user: {
                    connect: { id: user.id },
                },
            },
            select: { id: true },
        });
    });

    return { sessionId };
};
