import { prisma } from "@repo/db";
import { hash } from "argon2";
import chalk from "chalk";
import { IS_PROD, SIGN_UP_EXPIRY } from "../../../configs/constant.js";
import { logger } from "../../../configs/logger.js";
import { addSecondsToNow } from "../../../helpers/add-seconds-to-now.js";
import { generateOtp } from "../../../helpers/generate-otp.js";
import { generateToken } from "../../../helpers/generate-token.js";

export const signUpService = async ({
    emailAddress,
    password,
}: {
    password: string;
    emailAddress: string;
}): Promise<{
    token: string;
}> => {
    const emailRecord = await prisma.ourUserEmail.findFirst({
        where: { address: emailAddress, verified: true },
    });

    if (emailRecord) {
        // for preventing user enumeration
        const signUp = await prisma.ourUserSignUp.create({
            data: {
                expiresAt: addSecondsToNow(SIGN_UP_EXPIRY),
                token: generateToken(16),
                emailAddress,
                passwordHash: await hash(password),
                verificationCodeHash: await hash(generateToken(128)), // never matchable code
            },
            select: { token: true },
        });

        return { ...signUp };
    }

    const { rawOtp, hashedOtp } = generateOtp(6);
    const signUp = await prisma.ourUserSignUp.create({
        data: {
            expiresAt: addSecondsToNow(SIGN_UP_EXPIRY),
            token: generateToken(16),
            emailAddress,
            verificationCodeHash: await hashedOtp,
            passwordHash: await hash(password),
        },
        select: { token: true },
    });

    if (!IS_PROD) {
        logger.info(chalk.bgGreen(rawOtp));
    }

    return { ...signUp };
};
