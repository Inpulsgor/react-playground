import { Router } from "express";
import { registerValidation } from "../validations/user";
import { authCheck } from "../utils/authCheck";
import userController from "../controllers/user";

const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", registerValidation, userController.register);
userRouter.get("/user", authCheck, userController.user);

export default userRouter;
