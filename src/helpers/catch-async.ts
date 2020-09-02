import { Request, Response, NextFunction } from 'express';

export type MiddlewareType = (req: Request, res: Response, next: NextFunction) => Promise<void>

export const catchAsync = (fn:  MiddlewareType) => 
  (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next)