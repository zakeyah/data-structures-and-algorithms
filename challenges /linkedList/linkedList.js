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
      node.next = this.head;
      this.head = node;
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

  append(value){
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

  insertBefore(value, newVal){
    let node = new Node(newVal);
     if(this.head.value===value){
       let x= this.head
        node.next=x;
       this.head=node
       return this;
     }else{
       let current = this.head
      while(current.next){
        console.log(current.next.value)
      if(current.next.value!==value){
        current=current.next;

      }else{
        console.log('hiiiii')
        let x= current.next
        console.log('xxxxx',x)
        node.next=x;
         console.log('node',node)
       current=node
       console.log('current',current)
       return ;
      }
    }
     }
  }

  insertAfter(value, newVal){
    let node = new Node(newVal)
    let current=this.head;
      while(current.next){
      if(current.value===value){
        console.log('after 2')
        let x= current.next
        node.next=x
       current.next=node;
       current=current.next
      }else{
        current=current.next;
      }
    }
    return this;
  }
  kthFromEnd(k){
    if (typeof k !== 'number' || !Number.isInteger(k) || k<0){
      return 'Exception';
    }
    let length = 0;
    let pointer = 0;
    let current = this.head;
    length ++;
    while(current.next){
      current = current.next;
      length ++;
    } 
    if (k>length){
      return 'Exception';
    }
     if (k<length){
       current = this.head;
       console.log('hiii')
      while(current.next){
      if(k===length-pointer){
        return current.value;
      }else{
      current = current.next;
      }
      pointer++
      }
      if(k===length-pointer){
        return current.value;
      }
    } 
  }
}

module.exports={
  Node,
  LinkedList
};

