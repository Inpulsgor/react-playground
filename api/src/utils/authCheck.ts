import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface RequestCustom extends Request {
  userId: string;
}

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  console.log("token --->", token);

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.REACT_APP_JWT_KEY! || "secretKey",
      );

      console.log(
        "process.env.REACT_APP_JWT_KEY",
        process.env.REACT_APP_JWT_KEY,
      );

      // const customReq = req as RequestCustom;

      console.log("decoded", decoded);

      // customReq.userId = decoded._id;

      next();
    } catch (error) {
      console.log("error", error);

      return res.status(403).json({
        message: "No access",
      });
    }
  } else {
    return res.status(403).json({
      message: "No access",
    });
  }
};
