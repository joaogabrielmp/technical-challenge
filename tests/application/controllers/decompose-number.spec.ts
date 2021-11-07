import { DecomposeNumberController } from '@/application/controllers'
import { MissingParamError, InvalidParamError, ServerError } from '@/application/errors'
import { badRequest, serverError } from '@/application/helpers'
import { DecomposeNumberSpy, ValidationSpy, throwError } from '@/tests/application/mocks'

const mockRequest = (): DecomposeNumberController.Input => {
  return {
    number: 45
  }
}

type SutTypes = {
  sut: DecomposeNumberController
  validationSpy: ValidationSpy
  decomposeNumberSpy: DecomposeNumberSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const decomposeNumberSpy = new DecomposeNumberSpy()
  const sut = new DecomposeNumberController(validationSpy, decomposeNumberSpy)
  return {
    sut,
    validationSpy,
    decomposeNumberSpy
  }
}

describe('DecomposeNumberController', () => {
  test('Should return 500 if DecomposeNumber throws', async () => {
    const { sut, decomposeNumberSpy } = makeSut()
    jest.spyOn(decomposeNumberSpy, 'execute').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call decomposeNumberSpy with correct values', async () => {
    const { sut, decomposeNumberSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(decomposeNumberSpy.params).toEqual({
      number: request.number
    })
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return 400 if MissingParamError returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError('any_error')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should return 400 if InvalidParamError returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new InvalidParamError('any_error')
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
