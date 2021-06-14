'use strict';


const insertionSort = require('../Mergesort');
describe('test  Merge Sort', () => {
  it('sort array', () => {
    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });
  it('sort Reverse-sorted array', () => {
    expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });
  it('sort Few uniques array', () => {
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
  });
  it('sort Nearly-sorted array', () => {
    expect(insertionSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});
