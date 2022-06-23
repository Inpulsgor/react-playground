import { Router } from "express";
import { upload } from "../utils/storageUpload";
import { authCheck } from "../utils/authCheck";
import uploadController from "../controllers/upload";

const uploadRouter = Router();

uploadRouter.post(
  "/",
  authCheck,
  upload.single("image"),
  uploadController.getPosts,
);

export default uploadRouter;
