'use strict'; 

const test = require('../hashtable.js');

describe('testing hash table', () => {
    const table = new test.HashTable(1024);
    it('should hash a key and return hte value', () => {
        expect(table.hash('Nick')).toEqual(563);
    })

    it('should add a key value to the hash table', () => {
        table.add('James', 'student');

        expect(table.contains('James')).toEqual(true);
    })

    it('should return true if key exists in the table', () => {
        table.add('Nick', 'student');

        expect(table.contains('Nick')).toEqual(true);
    })
})