'use strict';

class Node {
  constructor(value){
    this.value=value,
    this.next=null
  }
}

class LinkedList {
  constructor(){
    this.head=null
  }
  insert(value){
    const node = new Node(value);
    if(!this.head){
      this.head=node;
    }else{
      let current = this.head;
      while(current.next){
        current=current.next;
      }
      current.next=node;
    }
    return this;
  }

  includes(value){
    let current = this.head;
    while(current.next){
      if(current.value===value){
        return true;
      }else{
        current=current.next;
      }
    }
    return false;
  }

  toString(){
    let current=this.head;
    let string='';
    while(current.next){
      string+= `{ ${current.value} } ->`;
      current=current.next;
    }
    return string+ 'NULL';
  }
}

module.exports={
  Node,
  LinkedList
};

