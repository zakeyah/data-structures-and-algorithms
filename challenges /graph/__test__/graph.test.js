const Graph = require('../graph');

describe('Graph test', () => {

  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();
    graph.addNode(3);
    graph.addNode(4);
    expect(graph.size()).toBe(2);
  });

  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    graph.addNode(8);
    graph.addNode(3);
    graph.addEdge(8, 3, 5);
    expect(graph.getNeighbours(8)[0].weight).toBe(5);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    graph.addNode(7);
    graph.addNode(4);
    expect(graph.getNodes()).toBeDefined();
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1, 3, 5);
    graph.addEdge(1, 2, 3);
    expect(graph.getNeighbours(1)[0].vertex).toBe(3);
    expect(graph.getNeighbours(1)[1].vertex).toBe(2);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(4);
    graph.addEdge(1, 4, 8);
    expect(graph.getNeighbours(1)[0].weight).toBe(8);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addEdge(2, 1, 5);
    expect(graph.size()).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    graph.addNode(1);
    graph.addEdge(1, 1, 4);
    expect(graph.size()).toEqual(1);
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();
    expect(graph.size()).toBe(null);
  });
});








