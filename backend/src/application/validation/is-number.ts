import { Validation } from '@/application/interfaces'
import { InvalidParamError } from '@/application/errors'

export class IsNumber implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (!Number.isInteger(Number(input[this.fieldName]))) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
