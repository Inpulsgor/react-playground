import { Router } from "express";
import { registerValidation } from "../validations/user";
import userController from "../controllers/user";

const userRouter = Router();

userRouter.get("/", registerValidation, userController.getUsers);
userRouter.post("/", registerValidation, userController.registerUser);

export default userRouter;
