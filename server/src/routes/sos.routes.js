// routes/sosRoutes.js
import express from "express";
import { getAllSOS, makeSOS } from "../controllers/sos.controller.js";
const router = express.Router();

router.post("/addsos", makeSOS);   
router.get("/showsos", getAllSOS);   

export default router;
