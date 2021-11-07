import { Validation } from '@/application/interfaces'
import { InvalidParamError } from '@/application/errors'

export class IsNumber implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (typeof input[this.fieldName] !== 'number') {
      return new InvalidParamError(this.fieldName)
    }
  }
}
