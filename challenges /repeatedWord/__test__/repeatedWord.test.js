'use strict';
const repeatedWord= require('../repeatedWord');
const str1 = 'Once upon a time, there was a brave princess who...';
const str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
const str4 = 'good moorning lana';

describe('test the Repeated Word',()=>{
  it('test 1 ',()=>{
    expect(repeatedWord(str1)).toEqual('a');
  });
  it('test 2 ',()=>{
    expect(repeatedWord(str2)).toEqual('it');
  });
  it('test 3 ',()=>{
    expect(repeatedWord(str3)).toEqual('summer');
  });
  it('test 4 ',()=>{
    expect(repeatedWord(str4)).toEqual('No Words Repeated');
  });
});
