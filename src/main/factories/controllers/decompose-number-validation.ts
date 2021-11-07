import { Validation } from '@/application/interfaces'
import { ValidationComposite, RequiredField, IsNumber } from '@/application/validation'

export const makeDecomposeNumberValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredField('number'))
  validations.push(new IsNumber('number'))
  return new ValidationComposite(validations)
}
