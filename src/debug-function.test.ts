import { debugFunction, sum } from './debug-function'

// This test file is just for debugging functions
describe('execute debugFunction', () => {
  it('start debug', () => {
    // Change to the input and expected you want to debug
    const input = 'input'
    const expected = true
    expect(debugFunction(input)).toBe(expected)
  })
})

// this test is an example
describe('Array Sum Functionality', () => {
  it('should be return the sum of an array of numbers', () => {
    // input
    const numbers = [1, 2, 3]
    // expected
    const expected = 6
    expect(sum(numbers)).toBe(expected)
  })
})
