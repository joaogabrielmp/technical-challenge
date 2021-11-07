import { divisorNumber } from '@/domain/services'

describe('DivisorNumberService', () => {
  test('Should be able divisor 45 correctly', () => {
    const result = divisorNumber(45)
    expect(result).toEqual([1, 3, 5, 9, 15, 45])
  })

  test('Should be able divisor 10 correctly', () => {
    const result = divisorNumber(10)
    expect(result).toEqual([1, 2, 5, 10])
  })
})
