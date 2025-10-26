import { Router } from "express";
import { signInController } from "../../controllers/our-user/auth/sign-in.controller.js";
import { signUpVerificationController } from "../../controllers/our-user/auth/sign-up-verification.controller.js";
import { signUpController } from "../../controllers/our-user/auth/sign-up.controller.js";
import { requireBodyMiddleware } from "../../middlewares/require-body.js";

export const authRouter: Router = Router();
authRouter.post("/magic-link", requireBodyMiddleware /* magicLinkController */);
authRouter.post(
    "/magic-link/:token/verify",
    requireBodyMiddleware /* magicLinkVerificationController */
);
authRouter.post("/sign-up", requireBodyMiddleware, signUpController);
authRouter.post("/sign-up/:token/verify", requireBodyMiddleware, signUpVerificationController);
authRouter.post("/sign-in", requireBodyMiddleware, signInController);
authRouter.post("/forgot-password", requireBodyMiddleware /* forgotPasswordController */);
authRouter.post("/verify-recovery/:token", requireBodyMiddleware /* verifyRecoveryController */);
authRouter.post("/reset-password/:token", requireBodyMiddleware /* resetPasswordController */);
