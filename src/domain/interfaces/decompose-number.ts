export interface DecomposeNumber {
  execute: (params: DecomposeNumber.Input) => Promise<DecomposeNumber.Output>
}

export namespace DecomposeNumber {
  export type Input = {
    number: number
  }

  export type Output = {
    divisorNumbers: number[]
    primeDividers: number[]
  }
}
