'use strict';

const quickSort = require('../quick-sort.js')

describe('Tests for Insertion Sort function', () => {
    it('should sort the array values from least to greatest', () => {
        let testArray = [8,4,23,42,16,15];
        let test = quickSort(testArray, 0, 5);

        expect(test).toEqual([4,8,15,16,23,42])
    })

    it('should sort an array from greatest to lowest to lowest ot greatest', () => {
        let testArray = [60,50,40,30,20,10];
        let test = quickSort(testArray, 0, 5);

        expect(test).toEqual([10,20,30,40,50,60]);
    })
})