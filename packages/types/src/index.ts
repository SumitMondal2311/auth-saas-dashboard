import {
    applicationSchema,
    authSchema,
    emailAddressSchema,
    passwordSchema,
    verificationCodeSchema,
} from "@repo/validation";
import { z } from "zod";

// -- -- -- Zod Schema Types -- -- -- //

export type EmailAddressSchema = z.infer<typeof emailAddressSchema>;
export type ApplicationSchema = z.infer<typeof applicationSchema>;
export type AuthSchema = z.infer<typeof authSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type VerificationCodeSchema = z.infer<typeof verificationCodeSchema>;
