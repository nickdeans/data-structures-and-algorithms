'use strict';

const trees = require('../tree/tree.js');
const Node = trees.tree;
const Tree = trees.tree;

let firstTree = new Tree();
firstTree.root = new Node(8);
firstTree.root.left = new Node(28);
firstTree.root.left.left = new Node(24);
firstTree.root.left.right = new Node(23);
firstTree.root.right = new Node (11);
firstTree.root.right.left = new Node(42);
firstTree.root.right.right = new Node(55);

let secondTree = new Tree();
secondTree.root = new Node(1);
secondTree.root.left = new Node(28);
secondTree.root.left.left = new Node(29);
secondTree.root.left.right = new Node(23);
secondTree.root.right = new Node (11);
secondTree.root.right.left = new Node(36);
secondTree.root.right.right = new Node(55);

const tree_intersection = (firstTree, secondTree) => {
    let hashTable = {};
    const preOrder = (tree) => {
        let arr = [];
        const helper = (node) => {
            if(hashTable[node.value]){
                arr.push(node.value);
            } else {
                hashTable[node.value] = node.value;
            }

            if(node.left) {
                helper(node.left);
            }

            if(node.right) {
                helper(node.right);
            }
        };
        let current = tree.root;
        helper(current);
        return arr;
    }
    preOrder(firstTree);
    return preOrder(secondTree);
}

module.exports = {
    tree: Tree,
    node: Node,
    tree_intersection: tree_intersection
}