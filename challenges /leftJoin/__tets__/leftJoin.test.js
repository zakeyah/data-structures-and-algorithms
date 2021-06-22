const leftJoin=require('../leftJoin');
const HashTable = require('../../hashtable/hashtable');


describe('test leftJoin function', () => {
  it('return  array in which the second index is null in each sub-array when no keys match between the two tables', () => {
    let hashtable1 = new HashTable(16);
    let hashtable2 = new HashTable(16);
    hashtable1.add('fond', 'enamour');
    hashtable1.add('wrath', 'anger');
    hashtable1.add('diligent', 'employed');
    hashtable1.add('outfit', 'garb');
    hashtable1.add('guide', 'usher');

    hashtable2.add('fond', 'averse');
    hashtable2.add('wrath', 'delight');
    hashtable2.add('diligent', 'idle');
    hashtable2.add('guide', 'follow');
    hashtable2.add('flow', 'jam');

    let results = leftJoin(hashtable1, hashtable2);
    expect(results).toEqual([
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'fond', 'enamour', 'averse' ],
      [ 'guide', 'usher', 'follow' ]
    ]);
  });
});
