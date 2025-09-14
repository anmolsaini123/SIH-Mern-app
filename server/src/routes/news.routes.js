import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getNewsByLocation } from "../controllers/news.controller.js";
const router = express.Router();
router.get("/",authMiddleware, getNewsByLocation);

export default router;
