import { Router } from "express";
import { createPostValidation } from "../validations/post";
import { authCheck } from "../utils/authCheck";
import postController from "../controllers/post";

const postRouter = Router();

postRouter.get("/", postController.getPosts);
postRouter.get("/:id", postController.getPost);
postRouter.post("/", authCheck, createPostValidation, postController.create);
postRouter.delete("/:id", authCheck, postController.remove); // !TODO: has error
postRouter.patch(
  "/:id",
  authCheck,
  createPostValidation,
  postController.update,
);

export default postRouter;
