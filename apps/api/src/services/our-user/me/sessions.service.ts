import { prisma } from "@repo/db";
import { APIError } from "../../../configs/api-error.js";
import { redis } from "../../../lib/redis.js";

export const sessionsService = {
    getAll: async (
        userId: string
    ): Promise<{
        sessions: { lastActiveAt: Date; id: string; userAgent: string; ipAddress: string }[];
    }> => {
        const sessionRecords = await prisma.ourUserSession.findMany({
            where: {
                expiresAt: { gt: new Date() },
                userId,
            },
            orderBy: { createdAt: "desc" },
            select: { lastActiveAt: true, id: true, userAgent: true, ipAddress: true },
        });

        return { sessions: sessionRecords };
    },
    delete: async ({ sessionId, userId }: { userId: string; sessionId: string }): Promise<void> => {
        const { count } = await prisma.ourUserSession.deleteMany({
            where: { id: sessionId, userId },
        });

        if (count <= 0) {
            throw new APIError(404, {
                message: `No session found with id: ${sessionId}`,
                code: "resource_not_found",
            });
        }

        await redis.del(`__session:${sessionId}`);
    },
    deleteAll: async (userId: string): Promise<void> => {
        const sessionRecords = await prisma.ourUserSession.findMany({
            where: { userId },
            select: { id: true },
        });

        await prisma.ourUserSession.deleteMany({
            where: { userId },
        });

        for (const session of sessionRecords) {
            await redis.del(`__session:${session.id}`);
        }
    },
};
