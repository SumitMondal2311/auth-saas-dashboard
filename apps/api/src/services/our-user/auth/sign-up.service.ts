import { prisma } from "@repo/db";
import { hash } from "argon2";
import chalk from "chalk";
import { IS_PROD, SIGN_UP_EXPIRY } from "../../../configs/constant.js";
import { logger } from "../../../configs/logger.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";
import { generateOtp } from "../../../helpers/generate-otp.js";
import { SignUpCookie } from "../../../types/sign-up-cookie.js";
import { VerificationOtp } from "../../../types/sign-up-verification.js";

export const signUpService = async ({
    emailAddress,
    password,
}: {
    password: string;
    emailAddress: string;
}): Promise<{
    signUp: SignUpCookie;
}> => {
    const emailRecord = await prisma.ourUserEmail.findFirst({
        where: {
            address: emailAddress,
            verified: true,
        },
    });

    if (emailRecord) {
        await hash("a1b2c3"); // for preventing timing attacks
        // for preventing user enumeration
        const signUp = await prisma.ourUserSignUp.create({
            data: {
                expiresAt: addSecondsToNow(SIGN_UP_EXPIRY),
                emailAddress,
                passwordHash: await hash(password),
                verification: {
                    attempts: 0,
                    codeHash: "otp",
                    object: "verification_otp",
                } as VerificationOtp,
            },
            select: {
                id: true,
                expiresAt: true,
            },
        });

        return { signUp };
    }

    const { rawOtp, hashedOtp } = generateOtp(6);
    const signUp = await prisma.ourUserSignUp.create({
        data: {
            expiresAt: addSecondsToNow(SIGN_UP_EXPIRY),
            emailAddress,
            passwordHash: await hash(password),
            verification: {
                codeHash: await hashedOtp,
                attempts: 0,
                object: "verification_otp",
            } as VerificationOtp,
        },
        select: {
            id: true,
            expiresAt: true,
        },
    });

    if (!IS_PROD) {
        logger.info(chalk.bgGreen(rawOtp));
    }

    return { signUp };
};
