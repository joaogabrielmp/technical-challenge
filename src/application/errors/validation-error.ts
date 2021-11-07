export class ValidationError extends Error {
  public readonly details: Error

  constructor (details: Error) {
    super('validation')
    this.details = details

    Error.captureStackTrace(this, ValidationError)
  }
}
