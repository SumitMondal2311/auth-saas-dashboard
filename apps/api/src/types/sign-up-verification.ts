export type VerificationOtp = {
    object: "verification_otp";
    codeHash: string;
    attempts: number;
};

export type VerificationMagicLink = {
    object: "verification_magic_link";
    token: string;
    attempts: number;
};

export type VerificationPassword = {
    object: "verification_password";
    attempts: number;
};
