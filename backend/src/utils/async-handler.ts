import { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler =
  <P = object, ResBody = unknown, ReqBody = unknown, ReqQuery = object>(
    fn: (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => Promise<unknown>,
  ): RequestHandler<P, ResBody, ReqBody, ReqQuery> =>
  (req, res, next) => {
    void fn(req, res, next).catch(next);
  };
