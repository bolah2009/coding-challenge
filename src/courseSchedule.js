// @ts-check

/**
 * @description A function that returns a boolean.
 *
 * @example canFinish(1, [2,3]);
 *
 * @param {number} numCourses - Number of courses
 * @param {number[][]} prerequisites - Array of courses
 * @returns {boolean} - True or False
 */
const canFinish = (numCourses, prerequisites) => {
  const hash = {};

  for (let i = 0; i < prerequisites.length; i += 1) {
    const [mainCourse, preCourse] = prerequisites[i];
    if (hash[mainCourse]) return false;

    hash[preCourse] = true;
  }
  return true;
};

export default canFinish;
