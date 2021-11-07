import { DecomposeNumber as Interface } from '@/domain/interfaces'

export class DecomposeNumber implements Interface {
  async execute ({ number }: Interface.Input): Promise<Interface.Output> {
    const divisorNumbers = []

    for (let index = 0; index <= number; index++) {
      if (number % index === 0) {
        divisorNumbers.push(index)
      }
    }

    const result = {
      entryNumber: number,
      divisorNumbers,
      primeDividers: []
    }

    return result
  }
}
