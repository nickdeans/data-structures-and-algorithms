'use strict';

class KaryNode {
    constructor(value, size) {
        this.value = value;
        this.children = new Array(size);
    }
}

class Kary {
    constructor(k) {
        this.root = null;
        this.k = k;
    }
}

function fizzBuzzTree(Kary) {
    let current = null;
    let queue = [];
    let newTree = tree;

    queue.unshift(newTree.root);
    
    while(queue.length) {
        current = queue.pop();
        if(current.value % 3 === 0 && current.value % 5 === 0){
            current.value = 'FizzBuzz';
          }
          else if(current.value % 3 === 0){
            current.value = 'Fizz';
          }
          else if(current.value % 5 === 0){
            current.value = 'Buzz';
          }
          else{
            current.value = `${current.value}`;
          }
          for(let i=0; i<current.children.length; i++) {
              if(current.children[i]){
                  queue.unshift(current.children[i]);
              }
          }
        }
        return Kary;
}

const tree = new Kary;
tree.root = new KaryNode(0, tree.k);
tree.root.children[0] = new KaryNode(1, tree.k);
tree.root.children[1] = new KaryNode(8, tree.k);
tree.root.children[2]= new KaryNode(3, tree.k);
tree.root.children[0].children[0] = new KaryNode(11, tree.k);
tree.root.children[0].children[2] = new KaryNode(5, tree.k);
tree.root.children[1].children[1] = new KaryNode(3, tree.k);

let newTree = fizzBuzzTree(tree);

console.log(newTree.root.value);
console.log(newTree.root.children[1].value);
console.log(newTree.root.children[2].value);
console.log(newTree.root.children[0].children[0].value);
console.log(newTree.root.children[1].children[1].value);
console.log(newTree.root.children[1].children[1].value);

module.export = { 
    KaryNode: KaryNode,
    Kary: Kary,
    fizzBuzzTree: fizzBuzzTree
};