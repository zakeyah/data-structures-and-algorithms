'use strict';

function binarySearch(array,value){
    const newArr=[];
    for(let i=0 ;i<array.length;i++){
      if(array[i]===value){
       newArr.push(i)
      }
    }
    if(newArr.length===1){
        return newArr[0];
    }else{
        return -1;
    }
  }


module.exports=binarySearch;
