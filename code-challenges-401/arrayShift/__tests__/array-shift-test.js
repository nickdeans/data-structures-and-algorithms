'use strict';

const arrayShiftChallenge = require('../array-shift.js');

describe('Testing array-shift code challenge', () => {
    it('should reponse with new value in middle index of array', () => {
        let testArray = [1,2,7,9];

        arrayShiftChallenge(testArray,10)
        expect(testArray).toEqual([1,2,10,7,9])
    })
})

describe('Testing array-shift code challenge', () => {
    it('should reponse with new value in middle index of array', () => {
        let testArray = [1,2,7,9];

        arrayShiftChallenge(testArray,10)
        expect(testArray) !== ([1,2,10,7,9])
    })
})