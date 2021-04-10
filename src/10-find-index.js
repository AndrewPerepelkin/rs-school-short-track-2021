/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result = -1;
  let start = 0;
  let end = array.length - 1;
  let found = false;
  let center;

  while (found === false && start <= end) {
    center = Math.floor((start + end) / 2);
    if (array[center] === value) {
      found = true;
      result = center;
    } else if (array[center] > value) {
      end = center - 1;
    } else {
      start = center + 1;
    }
  }
  return result;
}

module.exports = findIndex;
