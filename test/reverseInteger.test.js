import { reverseInteger } from '../src';

// Example 1:
// Input: 123
// // Output: 321

// // Example 2:
// // Input: -123
// // Output: -321

// // Example 3:
// // Input: 120
// // Output: 21

test('reverses a positive integer', () => {
  expect(reverseInteger(123)).toBe(321);
});

test('reverses a negative integer', () => {
  expect(reverseInteger(-5623)).toBe(-3265);
});

test('reverses an integer less than 10', () => {
  expect(reverseInteger(2)).toBe(2);
});

test('returns 0 for integers more than 32-bit', () => {
  expect(reverseInteger(4294967296)).toBe(0);
});
