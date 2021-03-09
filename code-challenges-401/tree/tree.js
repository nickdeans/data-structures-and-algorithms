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
        const results = [];
        const preOrderTraversal = (node) => {
            results.push(node.value);

            if(node.left){
                preOrderTraversal(node.left);
            }
            if(node.right){
                preOrderTraversal(node.right);
            }
        }
        let current = this.root;
        preOrderTraversal(current);
        return results;
    }

    inOrder() {
        let results = []; 
        const inOrderTraversal = (node) => {

            if(node.left){
                inOrderTraversal(node.left);
            }

            results.push(node.value);

            if(node.right){
                inOrderTraversal(node.right);
            }
        }
        let current = this.root;
        inOrderTraversal(current);
        return results;
    }

    postOrder() {
        let results = []; 
        const postOrderTraversal = (node) => {

            if(node.left){
                postOrderTraversal(node.left);
            }
            if(node.right){
                postOrderTraversal(node.right);
            }
            results.push(node.value);

        }
        let current = this.root;
        postOrderTraversal(current);
        return results;
    }

    findMaxValue() {
        let max = 0;
        const preOrderTraversal = (node) => {
            
            if(node.value>max){
                max = node.value;
            }

            if(node.left){
                preOrderTraversal(node.left);
            }
            if(node.right){
                preOrderTraversal(node.right);
            }
        }
        let current = this.root;
        preOrderTraversal(current);
        return max;
    }

    breadth() {
        let current = null;
        let queue = [];
        let newArray= [];

        queue.unshift(this.root);

        while(queue.length){
            current = queue.pop();
            newArray.push(current.value);
            if(current.left){
                queue.unshift(current.left)
            }
            if(current.right){
                queue.unshift(current.right);
            }
        }
        return newArray;
    }
}

const tree = new BinaryTree();
tree.root = new Node(8);
tree.root.left = new Node(11);
tree.root.left.left = new Node(24);
tree.root.left.right = new Node(1);
tree.root.right = new Node(12);
tree.root.right.right = new Node(76);


console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.findMaxValue());
console.log(tree.breadth());

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     add(value) {    
//         let current = this.root;
//         let node = new Node(value);

//         const insertNode = (current)  => {
//             if(current.value > value && current.left === null){
//                 node.left = current.left;
//                 node.right = current.rightl
//                 current.left = node
//             }
//             if(current.value > value){
//                 insertNode(current.left);
//             }if(current.value < value && current.right !== null){
//                 node.left = current.left;
//                 node.right = current.right;
//                 current.left = node;
//             }if(current.value < value){
//                 insertNode(current.right)
//             }
//         }
//         insertNode(current);
//     }
// };

module.exports = {
    node: Node,
    // BinarySearchTree,
    tree: BinaryTree
}