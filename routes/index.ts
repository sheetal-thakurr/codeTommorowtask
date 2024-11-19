import {Router} from "express";
import { authRouter } from "./auth";
import { categoryRouter } from "./category";
import { jwtAuth } from "../middleware/auth.middleware";

export const router = Router();

router.use("/auth", authRouter);
router.use("/category", jwtAuth, categoryRouter);




