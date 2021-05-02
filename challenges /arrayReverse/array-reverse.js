'use strict';

function reverseArray(array){
  let arr = [];
  for (let i = 0; i < array.length; i++){
    arr[i] = array[array.length - (i+1)];
  }
  return arr;
}

module.exports=reverseArray;
