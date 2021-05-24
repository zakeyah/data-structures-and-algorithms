'use strict';
const AnimalShelter= require('../fifoAnimalShelter');

describe('Queue Test', () => {
  it('should instantiate an empty queue with stacks', () => {
    const animalInes = new AnimalShelter();
    expect(animalInes.dogQ.front).toBeNull();
    expect(animalInes.catQ.rear).toBeNull();
  });
  it('should enqueue ', () => {
    const animalInes = new AnimalShelter();
    animalInes.enqueue('cat');
    animalInes.enqueue('dog');
    expect(animalInes.dogQ.front.value).toBe('dog');
    expect(animalInes.catQ.front.value).toBe('cat');
    expect(animalInes.enqueue('mouse')).toBe('it should be dog or cat');
  });
  it('should dequeue  ', () => {
    const animalInes = new AnimalShelter();
    animalInes.enqueue('cat');
    animalInes.enqueue('dog');
    animalInes.enqueue('dog');

    expect(animalInes.dequeue('dog')).toBe('dog');
    expect(animalInes.dogQ.front).toBeNull();
    expect(animalInes.catQ.front.value).toBe('cat');
    expect(animalInes.dequeue('mouse')).toBeNull();
  });
});
