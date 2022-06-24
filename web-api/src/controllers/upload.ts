import { Request, Response } from "express";

class UploadController {
  async upload(req: Request, res: Response) {
    res.json({
      url: `/uploads/${req.file?.originalname}`,
    });
  }
}

export default new UploadController();
