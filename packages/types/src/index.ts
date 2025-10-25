import {
    authSchema,
    emailAddressSchema,
    passwordSchema,
    verificationCodeSchema,
} from "@repo/validation";
import { z } from "zod";

// -- -- -- Zod Schema Types -- -- -- //

export type AuthSchema = z.infer<typeof authSchema>;
export type VerificationCodeSchema = z.infer<typeof verificationCodeSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type EmailAddressSchema = z.infer<typeof emailAddressSchema>;
