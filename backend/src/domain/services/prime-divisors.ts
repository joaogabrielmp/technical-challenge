export function primeDivisors (numbers: number[]): number[] {
  const primeDividers = []

  numbers.forEach((number: number) => {
    if (isPrime(number)) {
      primeDividers.push(number)
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
