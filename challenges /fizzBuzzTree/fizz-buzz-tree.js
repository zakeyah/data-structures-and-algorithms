'use strict';

class Node {
  constructor(value) {
    this.value = value,
    this.children = []
  }
}
class KaryTree {
  constructor(root = null) {
    this.root = root
  }
}
function fizzBuzzTree(ktree) {
  if (!ktree.root) {
    return 'Empty Tree';
  }
  // this.root=ktree.root;
  const traverse = node => {
    // node.value-------->1,2,5,11,3,10,9,15,4,3
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else {
      node.value = `${node.value}`;
    }
    if (node) {
      for (let i = 0; i < node.children.length; i++) {
        // node.children.length-------->3,1,1,3,2,1,2,3,1
        traverse(node.children[i]);
      }
    }
  };
  traverse(ktree.root);
}

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree
};

