import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("ValidateCustomerMiddleware");
    const { valid } = req.headers;
    console.log(valid);
    console.log("ValidateCustomerAccount");
    if (valid) {
      next();
    } else {
      return res.status(401).json({ message: "Account is invalid!" });
    }
  }
}
