import { Router } from "express";
import { sessionsController } from "../../controllers/our-user/me/sessions.controller.js";

export const meRouter: Router = Router();
meRouter.route("/sessions").delete(sessionsController.deleteAll);
meRouter.route("/sessions/:session_id").delete(sessionsController.delete);
