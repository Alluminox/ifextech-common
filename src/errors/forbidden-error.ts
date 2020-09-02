import { CustomError, ErrorMessage } from './custom-error'

export class ForbiddenError extends CustomError {

  statusCode: number = 403;

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, ForbiddenError.prototype)
  }
  
  serializeErrors(): ErrorMessage[] {
    return [ { message: this.message } ]
  }
  
}