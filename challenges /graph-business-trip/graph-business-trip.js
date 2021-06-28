'use strict';

function businessTrip(graph, cityArray) {
  let total = 0;
  let flag = false;

  for (let i = 0; i < cityArray.length -1; i++) {
    let neighbors = graph.getNeighbours(cityArray[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      console.log('cityArray[i+1]----------',cityArray[i+1])
      console.log('neighbors[j].vertex----------',neighbors[j].vertex)
      if (cityArray[i+1] === neighbors[j].vertex) {
        total += neighbors[j].weight;
        flag = true;
      }
    }
    if (flag === false) {
      total = 0;
    }
  }


  return `${flag}, $${total}`;
}
  
module.exports = businessTrip;