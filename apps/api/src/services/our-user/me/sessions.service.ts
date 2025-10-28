import { OurUserSession, prisma } from "@repo/db";
import { APIError } from "../../../configs/api-error.js";
import { redis } from "../../../lib/redis.js";

export const sessionsService = {
    getAllActive: async (
        userId: string
    ): Promise<{
        sessions: Pick<OurUserSession, "lastActiveAt" | "id" | "ipAddress" | "userAgent">[];
    }> => {
        const sessionRecords = await prisma.ourUserSession.findMany({
            where: { expiresAt: { gt: new Date() }, userId },
            select: { lastActiveAt: true, id: true, userAgent: true, ipAddress: true },
        });

        return { sessions: sessionRecords };
    },
    delete: async ({ sessionId, userId }: { userId: string; sessionId: string }): Promise<void> => {
        const sessionRecord = await prisma.ourUserSession.findFirst({
            where: { userId, id: sessionId },
            select: { lastVerifiedAt: true },
        });

        if (!sessionRecord) {
            throw new APIError(404, {
                message: `No session found with id: ${sessionId}`,
                code: "resource_not_found",
            });
        }

        await prisma.ourUserSession.deleteMany({
            where: { id: sessionId },
        });
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
