'use strict';

const Node = require('../linkedList').Node;
const LinkedList = require('../linkedList').LinkedList;

const linkedList = new LinkedList();

describe('test the Linked List',()=>{
  it('test Node constructer',()=>{
    let value = 'new value';
    const node = new Node(value);
    expect(node.value).toEqual('new value');
    expect(node.next).toBeNull();
  });

  it('test LinkedList constructer',()=>{
    expect(linkedList.head).toBeNull();
  });

  it('test Node insert',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toBeNull();
    linkedList.insert(2);
    expect(linkedList.head.value).toEqual(2);
  });

  it('test  LinkedList  includes',()=>{
    linkedList.insert(1);
    expect(linkedList.includes(1)).toEqual(true);
  });

  it('test  LinkedList  toString',()=>{
    expect(linkedList.toString()).toEqual('{ 1 } ->{ 2 } ->NULL');
  });
  it('test Node append ',()=>{
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    linkedList.append(3);
    expect(linkedList.head.next.next.next.value).toEqual(3);
  });
  it('test  LinkedList  insertBefore',()=>{
    linkedList.insertBefore(1,11);
    expect(linkedList.head.value).toEqual(11);
    expect(linkedList.head.next.value).toEqual(1);
  });

  it('test  LinkedList  insertAfter',()=>{
    linkedList.insertAfter(11,5);
    expect(linkedList.head.value).toEqual(11);
    expect(linkedList.head.next.value).toEqual(5);
  });

});

