'use strict';

const { Stack } = require('../stacksAndQueues/stacksAndQueues');

// cost Stack = require('../stacksAndQueues/stacksAndQueues').Stack;

function multiBracketValidation(input){
  let stringStack = new Stack();
//   let validate = /[\[\]\(\)\{\}]/g;
  // const stringArr=input.split('');
  console.log(input,'......input');

  for(let i =0 ;i< input.length;i++){

    if (input[i]==='('|| input[i]==='['|| input[i]==='{'){
      stringStack.push(input);
      console.log(input[i],'..........input[i]')
      console.log(stringStack,'.........in first if;')
    }else if(input[i]===')'|| input[i]===']'|| input[i]==='}'){
      stringStack.pop();
      console.log(stringStack,'.........in secand if;')
    }
  }

  if(stringStack.isEmpty()){
    return true;
  }else{
    return false;
  }
}

module.exports=multiBracketValidation;
