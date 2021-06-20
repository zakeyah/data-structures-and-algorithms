'use strict';

function repeatedWord(str) {
//   const wordsArr = str.split(' ');
  const wordsArr = str.match(/\w+/g);
  let newArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i].toLowerCase();
    let flag = false;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === word) {
        flag = true;
      }
    }
    if (flag) {
      return word;
    } else {
      newArr[i] = word;
    }
  }
  return 'No Words Repeated';
}
module.exports = repeatedWord;


