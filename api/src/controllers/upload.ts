import { Request, Response } from "express";

class UploadController {
  async getPosts(req: Request, res: Response) {
    res.json({
      url: `/upload/${req.file?.originalname}`,
    });
  }
}

export default new UploadController();
