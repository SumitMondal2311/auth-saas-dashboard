import { timingSafeEqual } from "crypto";

export const constantTimeCompare = (strA: string, strB: string): boolean => {
    const bufA = Buffer.from(strA);
    const bufB = Buffer.from(strB);

    if (bufA.length !== bufB.length) {
        timingSafeEqual(Buffer.alloc(bufB.length, " "), bufB);
        return false;
    }

    return timingSafeEqual(bufA, bufB);
};
