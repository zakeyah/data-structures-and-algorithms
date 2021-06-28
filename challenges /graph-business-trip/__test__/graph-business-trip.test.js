
const businessTrip=require('../graph-business-trip');
const Graph = require('../../graph/graph')


let graph = new Graph();
graph.addNode('Pandora');
graph.addNode('Arendelle');
graph.addNode('Metroville');
graph.addNode('Monstroplolis');
graph.addNode('Narnia');
graph.addNode('Naboo');
graph.addEdge('Pandora', 'Arendelle',150);
graph.addEdge('Pandora', 'Metroville',82);
graph.addEdge('Metroville', 'Pandora',82);
graph.addEdge('Arendelle', 'Metroville',99);
graph.addEdge('Arendelle', 'Monstroplolis',42);
graph.addEdge('Metroville', 'Monstroplolis',105);
graph.addEdge('Metroville', 'Narnia',37);
graph.addEdge('Monstroplolis', 'Naboo',73);
graph.addEdge('Narnia', 'Naboo',250);
describe('businessTrip', () => {

    it('[Metroville, Pandora, ] test', () => {
      expect(businessTrip(graph,['Metroville', 'Pandora', ])).toEqual('true, $82');
    });

    it('[Arendelle, Monstroplolis, Naboo] test', () => {
        expect(businessTrip(graph,['Arendelle', 'Monstroplolis', 'Naboo'])).toEqual('true, $115');
      });
      it('[Naboo, Pandora] test', () => {
        expect(businessTrip(graph,['Naboo', 'Pandora'])).toEqual('false, $0');
      });
      it('[Narnia, Arendelle, Naboo] test', () => {
        expect(businessTrip(graph,['Narnia', 'Arendelle', 'Naboo'])).toEqual('false, $0');
      });
  });