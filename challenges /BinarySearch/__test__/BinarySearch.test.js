'use strict';

const binarySearch = require('../BinarySearch');

describe('BinarySearch', () => {
  it('works', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});
