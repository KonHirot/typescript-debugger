// This function is for debugging execution.
// Write the code you want to debug and run the test file.
export function debugFunction<T>(input: T): boolean {
  debugger
  // Write the code you want to debug here
  return true
}

// This function is an example.
export function sum(numbers: number[]): number {
  // debugger
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
}
