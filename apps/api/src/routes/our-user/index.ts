import { Router } from "express";
import { requireAuthMiddleware } from "../../middlewares/require-auth.js";
import { authRouter } from "./auth.route.js";
import { meRouter } from "./me.route.js";

export const router: Router = Router();
router.use("/me", requireAuthMiddleware, meRouter);
router.use("/auth", authRouter);
