import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type Decoded = {
  _id: string;
};

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.headers.authorization || "";
  const token = bearerToken ? bearerToken.replace(/Bearer\s?/, "") : "";

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.REACT_APP_JWT_KEY! || "secretKey",
      ) as Decoded;

      req.userId = decoded._id;

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
