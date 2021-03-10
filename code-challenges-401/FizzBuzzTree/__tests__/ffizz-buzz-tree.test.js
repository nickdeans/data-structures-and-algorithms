'use strict';

const fizzBuzz = require('../fizz-buzz-tree.js')
const Kary = fizzBuzz.Kary;
const KaryNode = fizzBuzz.KaryNode;
const fizzBuzzTree = fizzBuzz.fizzBuzzTree;

describe('testing K-ary Tree function', () => {
    it('should return FizBuzz if value is equal to 1', () => {

        tree.root = new KaryNode(0, tree.k);
        tree.root.children[0] = new KaryNode(1, tree.k);
        tree.root.children[1] = new KaryNode(8, tree.k);
        tree.root.children[2]= new KaryNode(3, tree.k);
        tree.root.children[0].children[0] = new KaryNode(11, tree.k);
        tree.root.children[0].children[2] = new KaryNode(5, tree.k);
        tree.root.children[1].children[1] = new KaryNode(3, tree.k);

        let newTree = fizzBuzzTree(tree);

        expect().toEqual('FizzBuzz')
    })
})