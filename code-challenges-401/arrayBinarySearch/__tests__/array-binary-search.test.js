'use strict';

const binarySearch = require('../array-binary-search.js');

describe('testing binary search function', () => {
    it('should return the index of an array according to the key search value', () => {
        const indexOfValue = binarySearch([4,8,15,16,23,42], 15);

        expect(indexOfValue).toEqual(2);
    });

    it('should return the index of an array according to the key search value', () => {
        const indexOfValue = binarySearch([11,22,33,44,55,66,77], 90);

        expect(indexOfValue).toEqual(-1);
    })
});