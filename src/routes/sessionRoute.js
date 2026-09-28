import { Router } from "express";
import sessionController from "../controllers/sessionController.js";

const routerSession = Router();

routerSession.post("/:phoneConnection", sessionController.createSession);
routerSession.get("/:phoneConnection", sessionController.getSessionsByPhoneConnection);

export default routerSession;