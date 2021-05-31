'use strict';

const BinaryTree = require('../tree').BinaryTree;
const Node = require('../tree').Node;
const BinarySearchTree = require('../tree').BinarySearchTree;
let tree = null;
describe('Binary Tree', () => {

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('constructor', () => {
    let newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    expect(postOrderResult).toEqual(expected);
  });

  it('Can successfully return the max value from the tree', () => {
    expect(tree.findMaximumValue()).toEqual(9);
  });

  it('return the values from the tree in array sorted Breadth First Traversal', () => {
    expect(tree.breadthFirst()).toEqual([1,2,3,6,4,5,7,8,9]);
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
