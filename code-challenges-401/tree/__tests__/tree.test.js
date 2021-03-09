'use strict';

const BinaryTree = require('../tree.js');
const Tree = BinaryTree.tree;
const Node = BinaryTree.node;

describe('testing Tree class and methods', () => {
    it('should return the value in the tree order they were encountered', () => {
        const tree = new Tree();

        tree.root = new Node(8);
        tree.root.left = new Node(11);
        tree.root.left.left = new Node(24);
        tree.root.left.right = new Node(1);
        tree.root.right = new Node(12);
        tree.root.right.right = new Node(76);

        expect(tree.breadth()).toEqual([ 8, 11, 12, 24, 1, 76 ])
    })
})
