'use strict';

const BinaryTree = require('../tree').BinaryTree;
const Node = require('../tree').Node;
const BinarySearchTree = require('../tree').BinarySearchTree;
let tree = null;
describe('Binary Tree', () => {

  beforeAll(() => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');
    const h = new Node('h');
    const i = new Node('i');

    a.left = b;
    a.right = c;
    b.left = f;
    f.right = g;
    g.left = h;
    g.right = i;
    c.left = d;
    c.right = e;

    tree = new BinaryTree(a);
  });

  it('constructor', () => {
    let newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expected = ['a', 'b', 'f', 'g', 'h', 'i', 'c', 'd', 'e'];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = ['f', 'h', 'g', 'i', 'b', 'a', 'd', 'c', 'e'];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = ['h', 'i', 'g', 'f', 'b', 'd', 'e', 'c', 'a'];
    let postOrderResult = tree.postOrder();
    expect(postOrderResult).toEqual(expected);
  });
});
describe('Binary Search Tree', () => {




  it('Can successfully instantiate a tree with a single root node', () => {
    const newBST = new BinarySearchTree();
    newBST.add(5);
    expect(newBST.root.value).toEqual(5);
  });
  it('Can successfully add a left child  to a single root node', () => {
    const newBST = new BinarySearchTree();
    newBST.add(5);
    newBST.add(3);
    expect(newBST.root.left.value).toEqual(3);
  });

  it('Can successfully add aright child to a single root node', () => {
    const newBST = new BinarySearchTree();
    newBST.add(5);
    newBST.add(8);
    expect(newBST.root.right.value).toEqual(8);
  });

  it('return true if value is the tree', () => {
    const newBST = new BinarySearchTree();
    newBST.add(5);
    newBST.add(8);
    newBST.add(2);
    expect(newBST.contains(2)).toBe(true);
    expect(newBST.contains(8)).toBe(true);
    expect(newBST.contains(10)).toBe(false);
  });



});
