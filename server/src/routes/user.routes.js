import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  changecurrentpassword,
  getCureentUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authMiddleware, logoutUser);
router.route("/changepass").post(authMiddleware, changecurrentpassword);

router.route("/getme").post(authMiddleware, getCureentUser);

export default router;
