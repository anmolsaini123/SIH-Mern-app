import express from "express";
import { createComplaint , getAllComplaints } from "../controllers/complaint.Controller.js";
const router = express.Router();
router.post("/complaint", createComplaint);
router.get("/allComplaints", getAllComplaints);

export default router;
