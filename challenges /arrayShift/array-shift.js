'use strict';

function insertShiftArray (arr,value){
    let newArr =[];
    const middleIndex = Math.ceil(arr.length / 2);
    for (let i = 0 ;i<arr.length+1; i++){
        if (i<middleIndex){
            newArr[i]=arr[i];
        }else if(i===middleIndex){
            newArr[i]=value;
        }else if(i>middleIndex){
            newArr[i]=arr[i-1];
        }
    }
    return newArr
}    

module.exports=insertShiftArray;
