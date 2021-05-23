'use strict';

const Stack = require('../stacksAndQueues/stacksAndQueues').Stack;

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty())
      return 'Empty Queue!';
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

}

module.exports = PseudoQueue;
