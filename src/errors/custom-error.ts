export interface ErrorMessage {
  message: string
}

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract serializeErrors(): Array<ErrorMessage>
}