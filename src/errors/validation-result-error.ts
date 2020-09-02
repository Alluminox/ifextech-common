import { CustomError, ErrorMessage } from './custom-error'
import { ValidationError } from 'express-validator'

export class ValidationResultError extends CustomError {

  statusCode: number = 401;

  constructor(private errors: Array<ValidationError>) {
    super()
    Object.setPrototypeOf(this, ValidationResultError.prototype)
  }
  
  serializeErrors(): ErrorMessage[] {
    return this.errors.map(error => {
      return {
        message: error.msg,
        field: error.param
      }
    })
  }
  
}