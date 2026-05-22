import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { HTTP_STATUS } from "@/constants/http";
import { ApiError } from "@/utils/api-error";

export const validate = (schema: AnyZodObject) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!parsed.success) {
      next(new ApiError(HTTP_STATUS.UNPROCESSABLE_ENTITY, "Validation failed.", parsed.error.flatten()));
      return;
    }

    next();
  };
};
