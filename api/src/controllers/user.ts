import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/user";

class UserController {
  async login(req: Request, res: Response) {
    try {
      const user = await userModel.findOne({ email: req.body.email });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user._doc.password,
      );

      if (!isPasswordValid) {
        return res.status(400).json({
          message: "Incorrent login or password",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.REACT_APP_JWT_KEY!,
        {
          expiresIn: "1d",
        },
      );

      const { password, ...userData } = user._doc;

      res.status(200).json({
        success: true,
        ...userData,
        token,
      });
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Login error",
      });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }

      const userPassword = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userPassword, salt);

      const doc = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.avatar,
      });

      const user = await doc.save();
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.REACT_APP_JWT_KEY!,
        {
          expiresIn: "1d",
        },
      );

      const { password, ...userData } = user._doc;

      res.status(200).json({
        success: true,
        ...userData,
        token,
      });
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Registration error",
      });
    }
  }

  async user(req: Request, res: Response) {
    try {
      res.json({
        success: true,
      });
    } catch (error) {
      console.log("error", error);

      res.status(500).json({
        message: "Get user error",
      });
    }
  }
}

export default new UserController();
