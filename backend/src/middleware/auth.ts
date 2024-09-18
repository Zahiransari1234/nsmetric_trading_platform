import { Request, Response, NextFunction } from "express";

export const authenticateJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "failed to authenticate" }).end();
    }

    //Logic to decode and verify token
    next();
  } catch (error: any) {
    if (error.message) {
      res.status(406).json({ message: error.message }).end();
    } else {
      res.status(500).json({ message: "Something Went Wrong" });
    }
  }
};
