const graphMain = require('../breadth-first.js');
const Vertex = graphMain.vertex;
const Graph = graphMain.graph;

describe('testing breadth-dirst traversal method', () => {
    it('should add a new vertece to the graph', () => {
        let test = new Graph();
        let one = new Vertex('one');
        test.addVertex(one);

        expect(test.breadthFirst(one)).toBeTruthy();
    })
    it('should traverse a graph in breadth-first approach', () => {
        let test = new Graph();
        let one = new Vertex('one');
        let two = new Vertex('two');
        let three = new Vertex('three');
        let four = new Vertex('four');

        test.addVertex(one);
        test.addVertex(two);
        test.addVertex(three);
        test.addVertex(four);

        test.addEdge(one, two);
        test.addEdge(one, three);
        test.addEdge(two, three);
        test.addEdge(three, four);

        expect(test.breadthFirst(one)).toBeTruthy();
    })
})