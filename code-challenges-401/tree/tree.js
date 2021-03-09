'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrder() {
        const preOrderTraversal = (node) => {
            const results = [];
            console.log(node.value);

            if(node.left){
                preOrderTraversal(node.left);
            }
            if(node.right){
                preOrderTraversal(node.right);
            }
        }
        let current = this.root;
        preOrderTraversal(current);
    }

    inOrder() {
        const inOrderTraversal = (node) => {

            if(node.left){
                inOrderTraversal(node.left);
            }

            console.log(node.value);

            if(node.right){
                inOrderTraversal(node.right);
            }
        }
        let current = this.root;
        inOrderTraversal(current);
    }

    postOrder() {
        const postOrderTraversal = (node) => {

            if(node.left){
                postOrderTraversal(node.left);
            }
            if(node.right){
                postOrderTraversal(node.right);
            }
            console.log(node.value);

        }
        let current = this.root;
        postOrderTraversal(current);
    }
}

const tree = new BinaryTree();
tree.root = new Node(8);
tree.root.left = new Node(11);
tree.root.left.left = new Node(24);
tree.root.left.right = new Node(1);
tree.root.right = new Node(12);
tree.root.right.right = new Node(76);

tree.preOrder();
tree.inOrder();
tree.postOrder();

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {

    }
}
