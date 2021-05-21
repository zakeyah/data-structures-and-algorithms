'use strict';
const Stack = require('../stacksAndQueues').Stack;
const Queue = require('../stacksAndQueues').Queue;



describe('stacks check', () => {

  it('should push a value into the stack', () => {
    let stackClass = new Stack();
    stackClass.push(1);
    expect(stackClass.top.value).toBe(1);
    stackClass.push(2);
    expect(stackClass.top.value).toBe(2);
  });
  it('Should remove value at the top of stack', () => {
    let stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    expect(stackClass.pop()).toBe(3);
  });
  it('Should show you the top value of the stack', () => {
    let stackClass = new Stack();
    stackClass.push(1);
    stackClass.push(2);
    stackClass.push(3);
    expect(stackClass.peek().value).toBe(3);
    expect(stackClass.peek().next.value).toBe(2);
  });
  it('Should return true or false', () => {
    let stackClass = new Stack();
    expect(stackClass.isEmpty()).toBe(true);
    stackClass.push(1);
    expect(stackClass.isEmpty()).toBe(false);
  });
  it('Can successfully instantiate an empty stack', () => {
    let stackClass = new Stack();
    expect(stackClass.top).toBe(null);
  });
  it('Should return Stack is Empty when calling pop or peek on empty stack', () => {
    let stackClass = new Stack();
    expect(stackClass.pop()).toBe('Stack is Empty');
    expect(stackClass.peek()).toBe('Stack is Empty');
  });
});

describe('queue check', () => {

  it('should enqueue a value into the queue', () => {
    let queueClass = new Queue();
    queueClass.enqueue(1);
    expect(queueClass.front.value).toBe(1);
    queueClass.enqueue(2);
    expect(queueClass.front.value).toBe(1);
    expect(queueClass.rear.value).toBe(2);

  });
  it('should empty a queue after multiple dequeues', () => {
    let queueClass = new Queue();
    queueClass.enqueue(1);
    queueClass.enqueue(2);
    queueClass.dequeue();
    queueClass.dequeue();
    expect(queueClass.isEmpty()).toBe(true);
  });
  it('Should show you the front value of the queue', () => {
    let queueClass = new Queue();
    queueClass.enqueue(1);
    queueClass.enqueue(2);
    expect(queueClass.peek()).toBe(1);
  });
  it('Should return true or false', () => {
    let queueClass = new Queue();
    expect(queueClass.isEmpty()).toBe(true);
    queueClass.enqueue(1);
    expect(queueClass.isEmpty()).toBe(false);
  });
  it('Can successfully instantiate an empty queue', () => {
    let queueClass = new Queue();
    expect(queueClass.front).toBe(null);
    expect(queueClass.rear).toBe(null);
  });
  it('Should return Queue is Empty ! when calling dequeue or peek on empty stack', () => {
    let queueClass = new Queue();
    expect(queueClass.dequeue()).toBe('Queue is Empty !');
    expect(queueClass.peek()).toBe('Queue is Empty !');
  });
});
