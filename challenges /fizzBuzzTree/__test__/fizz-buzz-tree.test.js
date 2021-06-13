'use strict';

const Node = require('../fizz-buzz-tree.js').Node;
const KaryTree = require('../fizz-buzz-tree.js').KaryTree;
const fizzBuzzTree = require('../fizz-buzz-tree').fizzBuzzTree;

describe(' test FIZZ BUZZ TREE', () => {
  it('Should replace the value with the value from the if statement', () => {
    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    let n4 = new Node(4);
    let n5 = new Node(5);
    let n6 = new Node(10);
    let n7 = new Node(15);
    let n8 = new Node(11);
    let n9 = new Node(9);
    let n10 = new Node(30);
    let n11 = new Node(55);

    n1.children = [n2, n3, n4,n11];
    n2.children = [n5];
    n3.children = [n6, n7];
    n5.children = [n8];
    n6.children = [n9];
    n4.children = [n10];

    let ktree = new KaryTree(n1);
    // let newKAryTree = new KaryTree();

    fizzBuzzTree(ktree);
    expect(ktree.root.value).toEqual('1');
    expect(ktree.root.children[1].value).toEqual('Fizz');
    expect(ktree.root.children[2].children[0].value).toEqual('FizzBuzz');
    expect(ktree.root.children[1].children[0].children[0].value).toEqual('Fizz');
    expect(ktree.root.children[0].children[0].value).toEqual('Buzz');
    expect(ktree.root.children[1].children[0].value).toEqual('Buzz');
    expect(ktree.root.children[1].children[1].value).toEqual('FizzBuzz');
    expect(ktree.root.children[0].children[0].children[0].value).toEqual('11');
  });
});
