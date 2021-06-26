'use strict';

const HashTable = require('../hashtable');
let hashTable = new HashTable(1024);

describe('Hash Table', () => {
  it('should create a hashed table with length 1024', () => {
    expect(hashTable.table.length).toEqual(1024);
  });
  it('should hash the key ', () => {
    expect( hashTable.hash('key')).toEqual(107);
  });
  it('should add the value in the table by it is key', () => {
    hashTable.add('key', 1234);
    expect(hashTable.contains('key')).toBeTruthy();
    expect(hashTable.get('key')).toEqual(1234);
  });
  it('should find if the value exists in the table by it is key', () => {
    hashTable.add('key', 1234);
    expect(hashTable.contains('key')).toBeTruthy();
    expect(hashTable.contains('keeeeey')).toBeFalsy();
  });
  it('should get the value of a key if it exists in the table', () => {
    hashTable.add('key', 1234);
    expect(hashTable.get('key')).toEqual(1234);
  });
  it('should return null if the key is not in the table', () => {
    expect(hashTable.get('not key')).toEqual(null);
  });
  it('should handle a collision within the hashtable', () => {
    hashTable.add('nnaa', 1234);
    hashTable.add('aann', 4444);
    console.log([Object.values(hashTable.table[107])],';;;;;;;;;')
    expect(hashTable.contains('nnaa')).toBeTruthy();
    expect(hashTable.contains('aann')).toBeTruthy();
    expect(hashTable.get('nnaa')).toEqual(1234);
    expect(hashTable.get('aann')).toEqual(4444);
  });
});