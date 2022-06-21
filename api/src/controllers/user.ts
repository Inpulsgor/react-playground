import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import useModel from "../models/user";

class UserController {
  getUsers(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      success: true,
    });
  }

  async registerUser(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const doc = new useModel({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      avatar: req.body.avatar,
    });

    const user = await doc.save();

    res.status(200).json({
      success: true,
    });
  }
}

export default new UserController();
