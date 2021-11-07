import { DecomposeNumber } from '@/domain/interfaces'

export class DecomposeNumberSpy implements DecomposeNumber {
  params: DecomposeNumber.Input
  result: DecomposeNumber.Output
  async execute ({ number }: DecomposeNumber.Input): Promise<DecomposeNumber.Output> {
    this.params = { number }
    this.result = {
      entryNumber: 45,
      divisorNumbers: [1, 3, 5, 9, 15, 45],
      primeDividers: [1, 3, 5]
    }

    return this.result
  }
}
