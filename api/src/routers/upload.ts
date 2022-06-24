import { Router } from "express";
import { authCheck, storageUpload } from "../middlewares";
import { UploadController } from "../controllers";

const uploadRouter = Router();

uploadRouter.post(
  "/",
  authCheck,
  storageUpload.single("image"),
  UploadController.upload,
);

export default uploadRouter;
