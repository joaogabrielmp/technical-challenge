import { DecomposeNumber } from '@/domain/usecases'

type SutTypes = {
  sut: DecomposeNumber
}

const makeSut = (): SutTypes => {
  const sut = new DecomposeNumber()
  return { sut }
}

describe('DecomposeNumberUsecase', () => {
  test('Should return correctly entry number, divisor numbers and prime divisors of 45', async () => {
    const { sut } = makeSut()
    const number = 45

    const sutResponse = await sut.execute({ number })
    expect(sutResponse).toEqual({
      entryNumber: 45,
      divisorNumbers: [1, 3, 5, 9, 15, 45],
      primeDividers: [1, 3, 5]
    })
  })

  test('Should return correctly entry number, divisor numbers and prime divisors of 10', async () => {
    const { sut } = makeSut()
    const number = 10

    const sutResponse = await sut.execute({ number })
    expect(sutResponse).toEqual({
      entryNumber: 10,
      divisorNumbers: [1, 2, 5, 10],
      primeDividers: [1, 2, 5]
    })
  })
})
