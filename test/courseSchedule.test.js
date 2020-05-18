import { courseSchedule } from '../src';

test('returns true when courses are possible', () => {
  const prerequisites = [[1, 0]];
  const numCourses = 2;
  expect(courseSchedule(numCourses, prerequisites)).toBeTruthy();
});

test('returns false when courses are not possible', () => {
  const prerequisites = [
    [1, 0],
    [0, 1],
  ];
  const numCourses = 2;
  expect(courseSchedule(numCourses, prerequisites)).toBeFalsy();
});
