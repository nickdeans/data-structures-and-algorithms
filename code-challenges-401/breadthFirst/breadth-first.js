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

    breadthFirst(vertex) {
        const queue = [];
        const visited = new Set();
    
        queue.unshift(vertex);
        visited.add(vertex);
    
        while (queue.length) {
    
          const currentVertex = queue.pop();
          const neighbors = this.getNeighbors(currentVertex);
    
          for (let neighbor of neighbors) {
    
            const neighborVertex = neighbor.vertex;
    
            if (visited.has(neighborVertex)) { 
              continue;
            } else {
              visited.add(neighborVertex);
              queue.unshift(neighborVertex);
            }
          }
        }
    
        return visited;
      }
}

module.exports = {
    vertex: Vertex,
    edge: Edge,
    graph: Graph
}