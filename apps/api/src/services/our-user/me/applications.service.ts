import { prisma } from "@repo/db";
import { hash } from "argon2";
import { APIError } from "../../../configs/api-error.js";
import { generateToken } from "../../../helpers/generate-token.js";

export const applicationsService = {
    create: async ({
        userId,
        name,
    }: {
        name: string;
        userId: string;
    }): Promise<{ publicKey: string; secretKey: string }> => {
        const publicKey = `pk_live_${generateToken(32)}`;
        const secretKey = `sk_live_${generateToken(32)}`;
        await prisma.application.create({
            data: {
                publicKey,
                secretKeyHash: await hash(secretKey),
                name,
                owner: {
                    connect: { id: userId },
                },
            },
        });

        return { publicKey, secretKey };
    },
    regenerateKeys: async ({
        applicationId,
        userId,
    }: {
        userId: string;
        applicationId: string;
    }): Promise<{ publicKey: string; secretKey: string }> => {
        const applicationRecord = await prisma.application.findFirst({
            where: { id: applicationId, ownerId: userId },
            select: { createdAt: true },
        });

        if (!applicationRecord) {
            throw new APIError(404, {
                message: `No application found with id: ${applicationId}`,
                code: "resource_not_found",
            });
        }

        const publicKey = `pk_live_${generateToken(32)}`;
        const secretKey = `sk_live_${generateToken(32)}`;
        await prisma.application.update({
            where: { id: applicationId },
            data: {
                publicKey,
                secretKeyHash: await hash(secretKey),
            },
            select: { id: true },
        });

        return { publicKey, secretKey };
    },
    delete: async ({
        applicationId,
        userId,
    }: {
        userId: string;
        applicationId: string;
    }): Promise<void> => {
        const { count } = await prisma.application.deleteMany({
            where: { id: applicationId, ownerId: userId },
        });

        if (count <= 0) {
            throw new APIError(404, {
                message: `No application found with id: ${applicationId}`,
                code: "resource_not_found",
            });
        }
    },
};
