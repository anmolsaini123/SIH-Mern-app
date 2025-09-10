import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createComplaint , getAllComplaints } from "../controllers/complaint.Controller.js";
const router = express.Router();
router.post("/complaint", authMiddleware ,createComplaint);
router.get("/allComplaints",authMiddleware , getAllComplaints);

export default router;
