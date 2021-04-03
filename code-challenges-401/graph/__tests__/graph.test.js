const graphMain = require('../graph.js');
const Vertex = graphMain.vertex;
const Graph = graphMain.graph;

describe('testing graph and methods', () => {
    it('should add a new vertex to graph', () => {
        let test = new Graph();
        let vertece = new Vertex('vertece');

        test.addVertex(vertece);
        expect(test.adjacencyList.get(vertece)).toBeTruthy();
    });
    it('should add new edge to two vertece', () => {
        let test = new Graph();
        let vertece = new Vertex('vertece');
        let verteceTwo = new Vertex('verteceTwo');
        
        test.addVertex(vertece); 
        test.addVertex(verteceTwo);
        expect(test.adjacencyList.get(vertece)[0].vertex.value).toEqual(0);
    })
})