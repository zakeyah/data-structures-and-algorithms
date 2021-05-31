# tree
Binary Tree and Bnary Search Tree

## Challenge
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
#### BinaryTree
1- preOrder
- space O(h)
- time O(n)
2- onOrder 
- space O(h)
- time O(n)
3- postOrder 
- space O(h)
- time O(n)
4- findMaximumValue
- space O(n)
- time O(n)
5- breadthFirst
- space O(n)
- time O(n)


#### BinarySearchTree
1- add
- space O(1)
- time O(n)

2- contain
- space O(1)
- time O(n)


## API
#### BinaryTree
1- preOrder
- returns an array of the values ordered root > left > right.

2- onOrder 
- returns an array of the values ordered left >root >  right.

3- postOrder 
- returns an array of the values left > right>root

4- findMaximumValue
- returns the max value from the tree

5- breadthFirst
- return array sorted Breadth First Traversal




#### BinarySearchTree
1- add
- adds a new node with that value in the correct location in the binary search tree.

2- contain
- returns a boolean indicating whether or not the value is in the tree at least once.


# findMaximumValue
Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

![](/assets/challenge16.jpg)



![](/assets/challenge17.jpg)