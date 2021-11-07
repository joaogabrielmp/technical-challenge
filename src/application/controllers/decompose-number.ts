import { DecomposeNumber } from '@/domain/usecases'
import { ValidationError } from '@/application/errors'
import { badRequest, ok, serverError } from '@/application/helpers'
import { Controller, HttpResponse, Validation } from '@/application/interfaces'

export class DecomposeNumberController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly decomposeNumber: DecomposeNumber
  ) {}

  async handle (request: ControllerInput): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        throw new ValidationError(error)
      }

      const result = await this.decomposeNumber.execute(request)

      return ok(result)
    } catch (error) {
      if (error.message === 'validation') {
        return badRequest(error.details)
      }

      return serverError(error)
    }
  }
}

interface ControllerInput {
  number: number
}
