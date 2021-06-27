const BreadthFirst = require('../graph-breadth-first');



describe('BreadthFirst test', () => {

  it('Node can be successfully added to the graph', () => {
    let graph = new BreadthFirst();
    graph.addNode('Pandora');
    graph.addNode('Arendelle');
    graph.addNode('Metroville');
    graph.addNode('Monstroplolis');
    graph.addNode('Narnia');
    graph.addNode('Naboo');
    graph.addEdge('Pandora', 'Arendelle');
    graph.addEdge('Arendelle', 'Metroville');
    graph.addEdge('Arendelle', 'Monstroplolis');
    graph.addEdge('Metroville', 'Monstroplolis');
    graph.addEdge('Metroville', 'Narnia');
    graph.addEdge('Metroville', 'Naboo');
    graph.addEdge('Monstroplolis', 'Naboo');
    expect(graph.breadthFirst('Pandora')).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo']);
  });
});
