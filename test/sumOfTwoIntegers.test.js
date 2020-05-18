import { sumOfTwoIntegers } from '../src';

test('sum two positive integers', () => {
  expect(sumOfTwoIntegers(1, 2)).toBe(3);
});

test('sum one positive and one negative integer', () => {
  expect(sumOfTwoIntegers(-2, 3)).toBe(1);
});

test('sum one negative and one positive integer', () => {
  expect(sumOfTwoIntegers(4, -6)).toBe(-2);
});

test('sum two negative integers', () => {
  expect(sumOfTwoIntegers(-1, -2)).toBe(-3);
});

test('sum two large integers', () => {
  expect(sumOfTwoIntegers(2000, 1000)).toBe(3000);
});
