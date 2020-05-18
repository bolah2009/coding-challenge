import { twoSum } from '../src';

const array = [2, 7, 11, 15];
const target = 9;

test('returns an array with two length when a sum is found', () => {
  expect(twoSum(array, target)).toHaveLength(2);
});

test('returns an empty array when a sum is not found', () => {
  const target = 50;

  expect(twoSum(array, target)).toHaveLength(0);
});

test('return an array that contains index of the first sum', () => {
  expect(twoSum(array, target)).toContain(0);
});

test('return an array that contains index of the second sum', () => {
  expect(twoSum(array, target)).toContain(1);
});

test('it returns array of indices for negative integers', () => {
  const array = [-2, 7, 11, 15];

  expect(twoSum(array, target)).toContain(2);
});
