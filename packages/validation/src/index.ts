import z from "zod";

export const applicationSchema = z.object({
    name: z.string({ error: "Application name required" }).nonempty("Enter application name"),
});

export const emailAddressSchema = z.object({
    emailAddress: z.email("Invalid email address").nonempty("Enter email address"),
});

export const passwordSchema = z.object({
    password: z
        .string({ error: "Password required" })
        .nonempty("Enter password")
        .min(12, "Password must contain at least 12 characters"),
});

export const verificationCodeSchema = z.object({
    code: z.string({ error: "Code required" }).nonempty("Enter code").length(6, "Incorrect code"),
});

export const authSchema = z.object({
    ...passwordSchema.shape,
    ...emailAddressSchema.shape,
});
