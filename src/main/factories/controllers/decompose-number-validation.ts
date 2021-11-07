import { Validation } from '@/application/interfaces'
import { RequiredFieldValidation, ValidationComposite } from '@/application/validation'

export const makeDecomposeNumberValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new RequiredFieldValidation('number'))
  return new ValidationComposite(validations)
}
