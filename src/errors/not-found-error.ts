import { CustomError, ErrorMessage } from './custom-error'

export class NotFoundError extends CustomError {

  statusCode: number = 404;

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
  
  serializeErrors(): ErrorMessage[] {
    return [ { message: this.message } ]
  }
  
}