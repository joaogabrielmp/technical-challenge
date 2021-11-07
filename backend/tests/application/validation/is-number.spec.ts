import { InvalidParamError } from '@/application/errors'
import { IsNumber } from '@/application/validation'

const field = 'any_field'

type SutTypes = {
  sut: IsNumber
}

const makeSut = (): SutTypes => {
  const sut = new IsNumber(field)
  return { sut }
}

describe('IsNumberValidation', () => {
  test('Should return an InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({ [field]: 'any' })
    expect(error).toEqual(new InvalidParamError(field))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    expect(sut.validate({ [field]: 1 })).toBe(undefined)
  })
})
