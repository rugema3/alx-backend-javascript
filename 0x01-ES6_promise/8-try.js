/**
 * Function to divide two numbers.
 *
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @returns {number} The result of the division.
 * @throws {Error} If the denominator is equal to 0.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Cannot divide by 0');
  }

  return numerator / denominator;
}
