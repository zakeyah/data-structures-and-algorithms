const Graph = require('../graph/graph');
const Queue = require('../stacksAndQueues/stacksAndQueues').Queue;


class BreadthFirst extends Graph {
  breadthFirst(node) {
    const newArr = [];
    let index =0;
    const queue = new Queue();
    queue.enqueue(node);
    while(!queue.isEmpty()){
      const vertex = queue.dequeue();
      if(!(newArr.includes(vertex))){
        newArr[index]=vertex;
        index++;
      }
      const x= this.getNeighbours(vertex);
      for(let i=0 ;i<x.length;i++){
        queue.enqueue(x[i].vertex);
      }
    }
    return newArr;

  }
}

module.exports=BreadthFirst;
