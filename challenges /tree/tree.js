'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value,
    this.right = right,
    this.left = left
  }
}


class BinaryTree {
  constructor(root = null) {
    this.root = root
  }

  preOrder() {
    let results = [];
    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }


  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  findMaximumValue(){
    if(!this.root){
      return 'Tree is Empty';
    }
    let max = this.root.value;
    let array = this.preOrder();
    for (let i=0; i<array.length;i++){
      if( array[i]> max){
        max = array[i];
      }
    }
    return max;

  }


}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
    const searchToAdd = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchToAdd(node.left);
        }

      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchToAdd(node.right);
        }
      }
    };
    searchToAdd(this.root);
  }
 
  contains(value) {
    if (this.root === null) return 'Empty Tree!';
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
 
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree

};
