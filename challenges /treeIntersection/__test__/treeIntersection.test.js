'use strict';
const Node= require('../../tree/tree').Node;
const BinaryTree= require('../../tree/tree').BinaryTree;
let tree1;
let tree2;
beforeAll(() => {
const one1 = new Node(150);
const two1 = new Node(100);
const three1 = new Node(250);
const four1 = new Node(75);
const five1 = new Node(160);
const six1 = new Node(200);
const seven1 = new Node(350);
const eight1 = new Node(125);
const nine1 = new Node(175);
const ten1 = new Node(300);
const eleven1 = new Node(500);

one1.left = two1;
one1.right = three1;
two1.left = four1;
two1.right = five1;
three1.left = six1;
three1.right = seven1;
five1.left = eight1;
five1.right = nine1;
seven1.left = ten1;
seven1.right = eleven1;
 tree1 = new BinaryTree(one1);


const one = new Node(42);
const two = new Node(100);
const three = new Node(15);
const four = new Node(160);
const five = new Node(125);
const six = new Node(175);
const seven = new Node(600);
const eight = new Node(200);
const nine = new Node(350);
const ten = new Node(4);
const eleven = new Node(500);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
five.left = eight;
five.right = nine;
seven.left = ten;
seven.right = eleven;
 tree2 = new BinaryTree(one);
})

describe('Tree Intersection Test', () => {
    it('can return a set of values found in both trees', () => {
      
        expect(treeIntersection(tree1, tree2)).toEqual([100,160,125,200,350,175,500]);
      });
})