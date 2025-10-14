import {
    emailAddressSchema,
    passwordSchema,
    signUpSchema,
    verificationCodeSchema,
} from "@repo/validation";
import { z } from "zod";

// -- -- -- Zod Schema Types -- -- -- //

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type VerificationCodeSchema = z.infer<typeof verificationCodeSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type EmailAddressSchema = z.infer<typeof emailAddressSchema>;

// -- -- -- API's Success Response Type -- -- -- //

// Auth API's //
export type prepareEmailAddressVerificationResult = {
    emailAddress: string;
};
