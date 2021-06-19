'use strict';

class Node {
  constructor(value){
    this.value=value,
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.root=null
  }


  add(value){
    if(!this.root){
      this.root=new Node(value);
    }else{
      let current= this.root;
      while(current.next){
        current=current.next.value;
      }
      current.next=new Node(value);
    }
  }
}

class HashTable{
  constructor(size){
    this.size=size,
    this.table= new Array(size)
  }
  add(key,value){
    const hashed= this.hash(key);
    if(!this.table[hashed]){
      this.table[hashed]=new LinkedList();
    }
    this.table[hashed].add({[key]:value});
  }
  get(key){
    const hashed= this.hash(key);
    if(!this.table[hashed]){
      return null;
    }
    let current= this.table[hashed].root;
    while(current){
      if(Object.keys(current.value)[0]===key){
        return Object.values(current.value)[0];
      }
      current=current.next;
    }
    // if(Object.keys(current.value)[0]===key){
    //   return Object.values(current.value)[0];
    // }
    return null;
  }
  contains(key){
    const hashed= this.hash(key);
    if(!this.table[hashed]){
      return false;
    }
    let current= this.table[hashed].root;
    if(Object.keys(current.value)[0]===key){
      return true;
    }
    while(current){
      if(Object.keys(current.value)[0]===key){
        return true;
      }
      current=current.next;
    }
    // if(Object.keys(current.value)[0]===key){
    //   return true;
    // }
    return false;
  }
  hash(key){
    const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
    return (sum * 19) % this.size;
  }

}


module.exports=HashTable;
