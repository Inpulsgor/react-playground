import { Router } from "express";
import { authCheck } from "../utils/authCheck";
import upload from "../utils/storageUpload";
import uploadController from "../controllers/upload";

const uploadRouter = Router();

uploadRouter.post(
  "/",
  authCheck,
  upload.single("image"),
  uploadController.upload,
);

export default uploadRouter;
