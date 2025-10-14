export type VerificationOtp = {
    attempts: number;
    codeHash: string;
    object: "verification_otp";
};

export type VerificationPassword = {
    attempts: number;
    object: "verification_password";
};
