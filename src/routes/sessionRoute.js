import { Router } from "express";
import sessionController from "../controllers/sessionController.js";

const routerSession = Router();

routerSession.post("/:deviceId", sessionController.createSession);
routerSession.get("/:deviceId", sessionController.getSessionsBydeviceId);

export default routerSession;