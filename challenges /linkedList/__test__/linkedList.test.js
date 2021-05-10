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
    expect(linkedList.head.next.value).toEqual(2);
  });

  it('test  LinkedList  includes',()=>{
    linkedList.insert(2);
    expect(linkedList.includes(2)).toEqual(true);
  });

  it('test  LinkedList  toString',()=>{
    expect(linkedList.toString()).toEqual('{ 1 } ->{ 2 } ->NULL');
  });

});

