'use strict';

// const multiBracketValidation = require('../multi-bracket-validation');
const multiBracket= require('../multi-bracket-validation');

describe('multiBracketValidation Test', () => {
  it('should return true .....', () => {
    expect(multiBracket('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracket('(){}[[]]')).toBeTruthy();
    expect(multiBracket('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('should return fslse .....', () => {

    expect(multiBracket('[({}]')).toBeFalsy();
    expect(multiBracket('(](')).toBeFalsy();
  });
});

