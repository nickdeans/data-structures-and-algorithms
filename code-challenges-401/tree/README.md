# Trees
I created a Node class with tree data structures. I utilized methods to traverse the tree classes.

## Challenge
- Code Challenge 15
    - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
    - Create a BinaryTree class
    - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

- Code Challenge 16
    - Find the Maximum Value in a Binary Tree

- Code Challenge 17
    - Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach and Efficiency
- Big 0
    - pre-order - Space: O(n) Time: O(n)
    - post-order - Space: O(n) Time: O(n)
    - in-order - Space: O(n) Time: O(n)
    - findMaxValue - Space: O(n) Time: O(n)

## API
- inOrder()
- preOrder();
- postOrder();
- findMaxValue();
- breadth();