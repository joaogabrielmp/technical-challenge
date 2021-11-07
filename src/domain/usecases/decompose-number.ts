import { DecomposeNumber as Interface } from '@/domain/interfaces'

export class DecomposeNumber implements Interface {
  async execute ({ number }: Interface.Input): Promise<Interface.Output> {
    return { divisorNumbers: [], primeDividers: [] }
  }
}
