'use strict';

const Queue = require('../stacksAndQueues/stacksAndQueues').Queue;


class AnimalShelter {
  constructor() {
    this.catQ=new Queue();
    this.dogQ=new Queue();
  }
  enqueue(animal){
    if(animal=== 'cat'){
      this.catQ.enqueue(animal);
    }else if(animal === 'dog'){
      this.dogQ.enqueue(animal);
    }else{return 'it should be dog or cat';}
  }

  dequeue(pref){
    if(pref=== 'cat'){
      this.catQ.dequeue();
      return this.catQ.dequeue();
    }else if(pref=== 'dog'){
      this.dogQ.dequeue();
      return this.dogQ.dequeue();
    }else{return null;}
  }
}

module.exports=AnimalShelter;
