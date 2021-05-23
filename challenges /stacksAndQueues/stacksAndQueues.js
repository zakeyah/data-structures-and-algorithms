'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this.top;
  }

  pop() {
    if (this.top === null) {return 'Stack is Empty';
    }
    let removedValue = this.top.value;
    this.top = this.top.next;
    return removedValue;
  }
  peek() {
    if (this.top === null) {return 'Stack is Empty';
    }
    return this.top;
  }
  isEmpty() {
    // if (this.top) {
    //   return false;
    // } else {
    //   return true;
    // }
    return this.top===null;
  }
}

class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(value) {
      var newNode = new Node(value);
      if (this.front===null) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) return 'Queue is Empty !';
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  
    peek() {
      if (this.isEmpty()) return 'Queue is Empty !';
      return this.front.value;
    }
  
    isEmpty() {
      return this.front === null;
    }
  }
  
  module.exports = {
    Stack,
    Queue,
  };