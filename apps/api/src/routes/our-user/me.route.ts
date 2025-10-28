import { Router } from "express";
import { applicationsController } from "../../controllers/our-user/me/applications.controller.js";
import { sessionsController } from "../../controllers/our-user/me/sessions.controller.js";
import { meController } from "../../controllers/our-user/me/this.controller.js";
import { requireBodyMiddleware } from "../../middlewares/require-body.js";

export const meRouter: Router = Router();
meRouter.get("/", meController.get);
meRouter.post("/applications", requireBodyMiddleware, applicationsController.create);
meRouter.patch("/applications/:id/regenerate-keys", applicationsController.regenerateKeys);
meRouter.delete("/applications/:id", applicationsController.delete);
meRouter.get("/sessions/this", sessionsController.get);
meRouter.delete("/sessions/:id", sessionsController.delete);
meRouter.route("/sessions").get(sessionsController.getAll).delete(sessionsController.deleteAll);
