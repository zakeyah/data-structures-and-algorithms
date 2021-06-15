'use strict';


const quickSort = require('../QuickSort');
describe('test  QuickSort', () => {
  it('sort array', () => {
    expect(quickSort([8,4,23,42,16,15], 0, [8,4,23,42,16,15].length - 1)).toEqual([4,8,15,16,23,42]);
  });
  it('sort Reverse-sorted array', () => {
    expect(quickSort([20,18,12,8,5,-2], 0, [20,18,12,8,5,-2].length - 1)).toEqual([-2,5,8,12,18,20]);
  });
  it('sort Few uniques array', () => {
    expect(quickSort([5,12,7,5,5,7], 0, [5,12,7,5,5,7].length - 1)).toEqual([5,5,5,7,7,12]);
  });
  it('sort Nearly-sorted array', () => {
    expect(quickSort([2,3,5,7,13,11], 0, [2,3,5,7,13,11].length - 1)).toEqual([2,3,5,7,11,13]);
  });
});
