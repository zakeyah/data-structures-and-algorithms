'use strict';

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let index;

  while (start <= end) {
    let randomIndex = Math.ceil((start + end) / 2);
    if (array[randomIndex] < value) {
      start = randomIndex + 1;
    } else if (array[randomIndex] > value) {
      end = randomIndex - 1;
    } else if (value === array[randomIndex]) {
      index = randomIndex;
      return index;
    }
  }
  return -1;
}


module.exports = binarySearch;
