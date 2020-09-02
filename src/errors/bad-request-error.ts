import { CustomError, ErrorMessage } from './custom-error'

export class BadRequestError extends CustomError {

  statusCode: number = 400;

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }
  
  serializeErrors(): ErrorMessage[] {
    return [ { message: this.message } ]
  }
  
}