/* eslint-disable no-bitwise */
// @ts-check
// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

/**
 * @description A function that sums two integers using bitwise operators and returns an integer.
 *
 * @example sumOfTwoIntegers(2, 3);
 *
 * @param {number} a - An Integer
 * @param {number} b  - An Integer
 *
 * @returns {number} - An Integer
 */
const sumOfTwoIntegers = (a, b) => {
  if (b === 0) return a;

  return sumOfTwoIntegers(a ^ b, (a & b) << 1);
};

export default sumOfTwoIntegers;
