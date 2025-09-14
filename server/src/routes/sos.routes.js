// routes/sosRoutes.js
import express from "express";
import { getAllSOS, makeSOS } from "../controllers/sos.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/addsos", authMiddleware, makeSOS);
router.get("/showsos", authMiddleware, getAllSOS);

export default router;
