// @ts-check
// Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

/**
 * @description A function that finds two numbers in a given array that sum ups to the given target.
 *
 * @example twoSum([1,2,3], 3);
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - An Integer
 *
 * @returns {number[]} - Indices of the two numbers such that they add up to the specified target
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

export default twoSum;
