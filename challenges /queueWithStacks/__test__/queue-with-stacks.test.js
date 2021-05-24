const PseudoQueue = require('../queue-with-stacks');


describe('Queue Test', () => {
  it('should instantiate an empty queue with stacks', () => {
    const sQueue = new PseudoQueue();
    expect(sQueue.stack1.top).toBeNull();
    expect(sQueue.stack2.top).toBeNull();
  });
  it('should enqueue ', () => {
    const sQueue = new PseudoQueue();
    sQueue.enqueue(1);
    sQueue.enqueue(2);
    sQueue.enqueue(3);
    expect(sQueue.stack1.top.value).toBe(3);
    expect(sQueue.stack1.top.next.value).toBe(2);
    expect(sQueue.stack2.isEmpty()).toBeTruthy();
  });
  it('should dequeue  ', () => {
    const sQueue = new PseudoQueue();
    sQueue.enqueue(5);
    sQueue.enqueue(6);
    expect(sQueue.dequeue()).toEqual(5);
    expect(sQueue.stack2.isEmpty()).toBeFalsy();
    expect(sQueue.stack1.isEmpty()).toBeTruthy();
    expect(sQueue.stack2.peek().value).toBe(6);
  });
  it('should return Empty Queue!', () => {
    const sQueue = new PseudoQueue();
    sQueue.dequeue();
    expect(sQueue.dequeue()).toBe('Empty Queue!');
    expect(sQueue.stack1.isEmpty()).toBeTruthy();
  });
});
