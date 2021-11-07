import { RequiredField } from '@/application/validation'
import { MissingParamError } from '@/application/errors'

const field = 'any_field'

const makeSut = (): RequiredField => {
  return new RequiredField(field)
}

describe('RequiredFieldValidation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ invalidField: 'any' })
    expect(error).toEqual(new MissingParamError(field))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ [field]: 'any' })
    expect(error).toBeFalsy()
  })
})
