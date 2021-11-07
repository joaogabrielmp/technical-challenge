import { divisorNumber } from '@/domain/services'

export function primeDivisors (number: number): number[] {
  const divisorNumbers = divisorNumber(number)
  const primeDividers = []

  divisorNumbers.forEach((divisorNumber: number) => {
    if (isPrime(divisorNumber)) {
      primeDividers.push(divisorNumber)
    }
  })

  return primeDividers
}

const isPrime = (number: number): number => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return
  }

  return number
}
