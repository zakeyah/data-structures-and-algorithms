'use strict';

const Node = require('../ll2').Node;
const LinkedList = require('../ll2').LinkedList;

// const linkedList = new LinkedList();

describe('test the Linked List',()=>{
  it('test Node constructer',()=>{
    let value = 'new value';
    const node = new Node(value);
    expect(node.value).toEqual('new value');
    expect(node.next).toBeNull();
  });

  it('test LinkedList constructer',()=>{
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('test Node insert',()=>{
    const linkedList = new LinkedList();
    linkedList.insertHead(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toBeNull();
    linkedList.insertHead(2);
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(1);
  });

  it('test  LinkedList  includes',()=>{
    const linkedList = new LinkedList();
      linkedList.insertHead(1);
    linkedList.inserAtTail(2);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.length).toEqual(2);
  });


//   it('test  LinkedList  toString',()=>{
//     expect(linkedList.toString()).toEqual('{ 1 } ->{ 2 } ->NULL');
//   });
  it('test Node append ',()=>{
    const linkedList = new LinkedList();
    linkedList.insertHead(1);
    linkedList.inserAtTail(2);
    linkedList.inserAtTail(3);
    linkedList.inserAtTail(4);
   
    linkedList.insertBefore(3,6);
    expect(linkedList.head.next.next.value).toEqual(6);
  });
//   it('test  LinkedList  insertBefore',()=>{
//     linkedList.insertBefore(1,11);
//     expect(linkedList.head.value).toEqual(11);
//     expect(linkedList.head.next.value).toEqual(1);
//   });

//   it('test  LinkedList  insertAfter',()=>{
//     linkedList.insertAfter(11,5);
//     expect(linkedList.head.value).toEqual(11);
//     expect(linkedList.head.next.value).toEqual(5);
//   });
//   it('test  LinkedList  kthFromEnd',()=>{
//     expect(linkedList.kthFromEnd(-1)).toEqual('Exception');
//     expect(linkedList.kthFromEnd('aaa')).toEqual('Exception');
//     expect(linkedList.kthFromEnd(0.5)).toEqual('Exception');
//     expect(linkedList.kthFromEnd(5)).toEqual(5);
//     expect(linkedList.kthFromEnd(1)).toEqual(3);
//   });

});
