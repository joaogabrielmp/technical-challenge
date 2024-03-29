import { Validation } from '@/application/interfaces'
import { MissingParamError } from '@/application/errors'

export class RequiredField implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    if (input[this.fieldName] === undefined) {
      return new MissingParamError(this.fieldName)
    }
  }
}
