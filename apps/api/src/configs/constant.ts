export const IS_PROD = process.env.NODE_ENV === "production";
export const MAX_EMAIL_CODE_ATTEMPTS = IS_PROD ? 5 : 3;
export const SESSION_EXPIRY = IS_PROD ? 7 * 24 * 60 * 60 : 24 * 60 * 60;
export const MAX_ACTIVE_SESSIONS = IS_PROD ? 5 : 2;
export const SIGN_UP_EXPIRY = IS_PROD ? 15 * 60 : 5 * 60;
export const SIGN_IN_EXPIRY = IS_PROD ? 10 * 60 : 5 * 60;
