import { primeDivisors } from '@/domain/services'

describe('PrimeDivisorsService', () => {
  test('Should be able return prime divisors of 45 correctly', () => {
    const result = primeDivisors([1, 3, 5, 9, 15, 45])
    expect(result).toEqual([1, 3, 5])
  })

  test('Should be able divisor prime divisors of 10 correctly', () => {
    const result = primeDivisors([1, 2, 5, 10])
    expect(result).toEqual([1, 2, 5])
  })
})
