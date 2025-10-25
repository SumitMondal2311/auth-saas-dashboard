import { prisma } from "@repo/db";
import { verify } from "argon2";
import { APIError } from "../../../configs/api-error.js";
import { SESSION_EXPIRY } from "../../../configs/constant.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";
import { VerificationOtp } from "../../../types/sign-up-verification.js";

export const verifyEmailAddressService = async ({
    signUpId,
    code,
    ipAddress,
    userAgent,
}: {
    ipAddress: string;
    userAgent: string;
    code: string;
    signUpId: string;
}): Promise<{
    sessionId: string;
}> => {
    const signUpRecord = await prisma.ourUserSignUp.findFirst({
        where: { id: signUpId },
        select: {
            emailAddress: true,
            passwordHash: true,
            expiresAt: true,
            verification: true,
        },
    });

    if (!signUpRecord) {
        throw new APIError(400, {
            message: "No sign up attempt was found. Please go back and try again.",
            code: "invalid_action",
        });
    }

    const { verification, emailAddress, passwordHash } = signUpRecord;
    const { codeHash, attempts, ...rest } = verification as VerificationOtp;

    if (attempts >= 5) {
        throw new APIError(403, {
            message: "Too many failed attempts. Please go back and try again.",
            code: "sign_up_failed",
        });
    }

    await prisma.ourUserSignUp.update({
        where: { id: signUpId },
        data: {
            verification: {
                attempts: attempts + 1,
                ...rest,
                codeHash,
            } as VerificationOtp,
        },
    });

    if ((await verify(codeHash, code)) === false) {
        throw new APIError(422, {
            message: "The code you have entered is incorrect",
            code: "incorrect_code",
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
                    create: {
                        address: emailAddress,
                        verified: true,
                    },
                },
                password: { create: { hash: passwordHash } },
            },
            select: { id: true },
        });
        return tx.ourUserSession.create({
            data: {
                ipAddress,
                userAgent,
                expiresAt: addSecondsToNow(SESSION_EXPIRY),
                user: { connect: { id: user.id } },
            },
            select: { id: true },
        });
    });

    return { sessionId };
};
