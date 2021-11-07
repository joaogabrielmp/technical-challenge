import { DecomposeNumber as Interface } from '@/domain/interfaces'

import { divisorNumber, primeDivisors } from '@/domain/services'

export class DecomposeNumber implements Interface {
  async execute ({ number }: Interface.Input): Promise<Interface.Output> {
    const divisorNumbers = divisorNumber(number)
    const primeDividers = primeDivisors(divisorNumbers)

    const result = {
      entryNumber: number,
      divisorNumbers,
      primeDividers
    }

    return result
  }
}
