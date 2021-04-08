'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(startVertex, endVertex, weight = 0) {
        if(!this.adjacencyList.has(startVertex)) {
            throw new Error('invalid start vertex');
        }

        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }


    getNeighbors(vertex) {
        if(!this.adjacencyList.has(vertex)) {
            throw new Error('no neighbors for vertex');
        }
        return [...this.adjacencyList.get(vertex)];
    }

    depthFirst(vertex) {

        const visitedVertices = new Set();
    
        visitedVertices.add(vertex);
        const traverse = (current, visited) => {
    
          visited.add(current);
    
          const neighbors = this.getNeighbors(current);
    
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor.vertex)) {
              traverse(neighbor.vertex, visited);
            }
          }
        }
        traverse(vertex, visitedVertices);
        return visitedVertices;
    }
}

module.exports = {
    vertex: Vertex,
    edge: Edge,
    graph: Graph
}