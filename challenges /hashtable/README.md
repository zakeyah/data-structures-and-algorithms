# Hash Table
- hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.

# Challenge:
- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

# Approach & Efficiency :
- add: 
 space O(1) time O(1)
- get :
space O(1) time O(1) || time o(n) if thear is collision
- hash:
 space O(1) time O(1) 
- contains: 
space O(1) time O(1) || time o(n) if thear is collision

# API

- add(key, value) method: which takes a key and a value as an argument, hashes the key and adding the pair to the table as {key: value} object.
- hash(key) method: which takes a key as an argument, and returns an index in the array within its range based on this key.
- contains(key) method: which takes a key as an argument, and returns true if the key exists, and returns false if not.
- get(key) method: which takes a key as an argument, and returns its value if it exists, and returns null if it does'nt.