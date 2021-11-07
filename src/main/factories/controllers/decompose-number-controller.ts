import { makeDecomposeNumber } from '@/main/factories/usecases'
import { makeDecomposeNumberValidation } from '@/main/factories/controllers'
import { DecomposeNumberController } from '@/application/controllers'
import { Controller } from '@/application/interfaces'

export const makeDecomposeNumberController = (): Controller => {
  const controller = new DecomposeNumberController(
    makeDecomposeNumberValidation(),
    makeDecomposeNumber()
  )

  return controller
}
