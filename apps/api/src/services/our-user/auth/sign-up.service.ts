import { prisma } from "@repo/db";
import { hash } from "argon2";
import chalk from "chalk";
import { IS_PROD, VERIFICATION_OTP_EXPIRY } from "../../../configs/constant.js";
import { logger } from "../../../configs/logger.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";
import { generateOtp } from "../../../helpers/generate-otp.js";
import { VerificationOtp } from "../../../types/sign-up-verification.js";

export const signUpService = async ({
    emailAddress,
    password,
}: {
    password: string;
    emailAddress: string;
}): Promise<{
    signUpId: string;
}> => {
    const emailRecord = await prisma.ourUserEmail.findFirst({
        where: {
            address: emailAddress,
            verified: true,
        },
        select: { userId: true },
    });

    if (emailRecord) {
        await hash("a1b2c3"); // prevent timing attacks
        const signUp = await prisma.signUp.create({
            data: {
                expiresAt: addSecondsToNow(VERIFICATION_OTP_EXPIRY),
                emailAddress,
                passwordHash: await hash(password),
                verification: {
                    attempts: 0,
                    codeHash: "otp",
                    object: "verification_otp",
                } as VerificationOtp,
            },
            select: { id: true },
        });

        return { signUpId: signUp.id };
    }

    const { rawOtp, hashedOtp } = generateOtp(6);
    const signUp = await prisma.signUp.create({
        data: {
            expiresAt: addSecondsToNow(VERIFICATION_OTP_EXPIRY),
            emailAddress,
            passwordHash: await hash(password),
            verification: {
                codeHash: await hashedOtp,
                attempts: 0,
                object: "verification_otp",
            } as VerificationOtp,
        },
        select: { id: true },
    });

    if (!IS_PROD) {
        logger.info(chalk.bgGreen(rawOtp));
    }

    return { signUpId: signUp.id };
};
