import { DecomposeNumber } from '@/domain/usecases'
import { DecomposeNumber as Interface } from '@/domain/interfaces'

export const makeDecomposeNumber = (): Interface => {
  return new DecomposeNumber()
}
