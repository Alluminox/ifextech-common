import { CustomError, ErrorMessage } from './custom-error'

export class UnauthorizedError extends CustomError {

  statusCode: number = 401;

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
  
  serializeErrors(): ErrorMessage[] {
    return [ { message: this.message } ]
  }
  
}