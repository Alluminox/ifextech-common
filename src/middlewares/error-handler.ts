import { Request, Response, NextFunction } from 'express';
import { CustomError} from '../errors/custom-error'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("Error Handler")
  let status = 400
  let responseData = [{ message: err.message }]

  if (err instanceof CustomError) {
    status = err.statusCode
    responseData = err.serializeErrors();
  }

  res.status(status).send({ errors: responseData })
}