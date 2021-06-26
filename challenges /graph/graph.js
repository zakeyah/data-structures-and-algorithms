const Vertex = require('./vertex.js');
const Edge = require('./edge.js');


class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight));
  }

  getNeighbours(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    return this.adjacencyList.get(vertex);
  }
  getNodes() {
    return this._adjacencyList.entries();
  }
  getSize() {
    return this._adjacencyList.size > 0 ? this._adjacencyList.size : 'Empty Graph';
  }
  // print() {
  //   for (const [k, v] of this._adjacencyList.entries()) {
  //     console.log('k---->', k);
  //     console.log('v---->', v);
  //   }
  // }

}

module.exports = Graph;
