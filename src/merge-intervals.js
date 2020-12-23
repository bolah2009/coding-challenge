/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
const merge = function(intervals) {
  const isOverlap = (a, b) => a[0] <= b[1] && b[0] <= a[1];

  const mergeOverlappingIntervals = (a, b) => [Math.min(a[0], b[0]), Math.max(a[1], b[1])];

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];

  sortedIntervals.forEach(interval => {
    const len = mergedIntervals.length;
    if (len) {
      if (isOverlap(mergedIntervals[len - 1], interval)) {
        const mergedInterval = mergeOverlappingIntervals(mergedIntervals[len - 1], interval);
        mergedIntervals[len - 1] = mergedInterval;
      } else {
        mergedIntervals.push(interval);
      }
    } else {
      mergedIntervals.push(interval);
    }
  });

  return mergedIntervals;
};

export default merge;
