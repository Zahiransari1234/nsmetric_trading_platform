import { Router } from "express";
import { authenticateJwt } from "../middleware/auth";
import {
  authenticateUserHandler,
  logOutHandler,
  loginUserHandler,
  refreshAccessTokenHandler,
  registerUserHandler,
} from "../controllers/auth.controller";

const router = Router();

router.route("/register").post(registerUserHandler);
router.route("/login").post(loginUserHandler);
router.route("/authenticate").get(authenticateJwt, authenticateUserHandler);
router.route("/logout").post(authenticateJwt, logOutHandler);
router.route("/refreshToken").post(refreshAccessTokenHandler);

export default router;
