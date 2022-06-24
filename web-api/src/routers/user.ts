import { Router } from "express";
import { UserController } from "../controllers";
import { authCheck, validationErrors } from "../middlewares";
import { registerValidation, loginValidation } from "../validations/user";

const userRouter = Router();

userRouter.post(
  "/register",
  registerValidation,
  validationErrors,
  UserController.register,
);
userRouter.post(
  "/login",
  loginValidation,
  validationErrors,
  UserController.login,
);
userRouter.get("/user", authCheck, UserController.user);

export default userRouter;
