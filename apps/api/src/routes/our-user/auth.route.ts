import { Router } from "express";
import { signInController } from "../../controllers/our-user/auth/sign-in.controller.js";
import { signUpController } from "../../controllers/our-user/auth/sign-up.controller.js";
import { verifyEmailAddressController } from "../../controllers/our-user/auth/verify-email-address.controller.js";
import { requireBodyMiddleware } from "../../middlewares/require-body.js";

export const authRouter: Router = Router();
authRouter.post("/sign-up", requireBodyMiddleware, signUpController);
authRouter.post("/verify-email-address", requireBodyMiddleware, verifyEmailAddressController);
authRouter.post("/sign-in", requireBodyMiddleware, signInController);
