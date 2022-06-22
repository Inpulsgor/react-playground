import { Router } from "express";
import { registerValidation, loginValidation } from "../validations/user";
import { authCheck } from "../utils/authCheck";
import userController from "../controllers/user";

const userRouter = Router();

userRouter.post("/register", registerValidation, userController.register);
userRouter.post("/login", loginValidation, userController.login);
userRouter.get("/user", authCheck, userController.user);

export default userRouter;
