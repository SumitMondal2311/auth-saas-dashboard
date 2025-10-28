import { Router } from "express";
import { sessionsController } from "../../controllers/our-user/me/sessions.controller.js";
import { meController } from "../../controllers/our-user/me/this.controller.js";

export const meRouter: Router = Router();
meRouter.get("/", meController.get);
meRouter.get("/sessions/active", sessionsController.getAllActive);
meRouter.get("/session", sessionsController.get);
meRouter.delete("/sessions/:id", sessionsController.delete);
meRouter.delete("/sessions", sessionsController.deleteAll);
