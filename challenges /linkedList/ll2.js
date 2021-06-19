'use strict';

class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}


class LinkedList{
    constructor(head=null){
      this.head=head,
      this.length=0
    }
    insertHead(value){
      let node = new Node(value);
      node.next= this.head;
      this.head=node;
      this.length++
    }
    inserAtTail(value){
        let node = new Node(value);
        if(!this.head){
            return 'empty ll'
        }
        let current = this.head;
        while(current.next){
            current=current.next;
            // console.log(current,'........ insid loop')
        }
        current.next=node;
        this.length++
    }
    insertBefore(value,newValue){
        let node= new Node(newValue)
        let current=this.head;
       while(current){
           if(current.next.value===value){
               node.next=current.next;
               current.next=node;
               this.length++
               return 
           }
           current=current.next
       }
    }
  }

  module.exports={
      Node,
      LinkedList
  }