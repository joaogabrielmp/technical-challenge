export function divisorNumber (number: number): number[] {
  const divisorNumbers = []

  for (let index = 0; index <= number; index++) {
    if (number % index === 0) {
      divisorNumbers.push(index)
    }
  }

  return divisorNumbers
}
