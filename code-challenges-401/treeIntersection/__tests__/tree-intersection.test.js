// 'use strict';

// const trees = require('../tree-intersection.js');
// const Node = trees.node;
// const Tree = trees.tree;

// const tree_intersection = trees.tree_intersection;


// describe('testing tree intersection function', () => {
//   it('should find common values in two trees', () => {
//     let firstTree = new Tree();
//     firstTree.root = new Node(8);
//     firstTree.root.left = new Node(28);
//     firstTree.root.left.left = new Node(24);
//     firstTree.root.left.right = new Node(23);
//     firstTree.root.right = new Node (11);
//     firstTree.root.right.left = new Node(42);
//     firstTree.root.right.right = new Node(55);
    
//     let secondTree = new Tree();
//     secondTree.root = new Node(1);
//     secondTree.root.left = new Node(28);
//     secondTree.root.left.left = new Node(29);
//     secondTree.root.left.right = new Node(23);
//     secondTree.root.right = new Node (11);
//     secondTree.root.right.left = new Node(36);
//     secondTree.root.right.right = new Node(55);

//     expect(tree_intersection(firstTree, secondTree)).toEqual([28, 23, 11, 55]);
//   })
// });