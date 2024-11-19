import { Router } from "express";
export const authRouter = Router();
import { login } from "../components/auth/login";

authRouter.post("/login", login)