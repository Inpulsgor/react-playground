import { Router } from "express";
import { postValidation } from "../validations/post";
import { authCheck } from "../middlewares";
import { PostController } from "../controllers";

const postRouter = Router();

postRouter.get("/", PostController.getPosts);
postRouter.get("/:id", PostController.getPost);
postRouter.post("/", authCheck, postValidation, PostController.create);
postRouter.delete("/:id", authCheck, PostController.remove); // !TODO: has error
postRouter.patch("/:id", authCheck, postValidation, PostController.update);

export default postRouter;
