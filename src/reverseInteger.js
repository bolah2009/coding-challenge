// @ts-check
// Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @description A function that reverse a 32-bit signed integer.
 *
 * @example reverseInteger(20);
 *
 * @param {number} x - An unsigned Integer to be reversed
 * @returns {number} - A reversed Integer
 */
const reverseInteger = x => {
  if (x >= -9 && x <= 9) return x;

  const reversedString = x
    .toString()
    .split('')
    .reverse()
    .join('');

  const integer = parseInt(reversedString, 10);
  const signedInteger = x < 0 ? integer * -1 : integer;

  if (signedInteger < -2147483648 || signedInteger > 2147483647) return 0;

  return signedInteger;
};

export default reverseInteger;
