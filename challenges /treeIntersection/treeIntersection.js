'use strict';
const HashTable =require('../hashtable/hashtable');

function treeIntersection (tree1,tree2){
  const newArr=[];
  const hashTable= new HashTable(1024);
  const tree1Arr=tree1.preOrder();
  const tree2Arr=tree2.preOrder();

  for(let i=0;i<tree1Arr.length;i++){
    hashTable.add(tree1Arr[i].toString());
  }
  for(let i=0;i<tree2Arr.length;i++){
    if(hashTable.contains(tree2Arr[i].toString())){
      newArr.push(tree2Arr[i]);
    }
  }
  return newArr;
}

module.exports=treeIntersection;
