'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js')

describe('Testing AnimalShelter fiunctions', () => {
    it('should add animal values', () => {
        const animalShelter = new AnimalShelter;
        animalShelter.enqueue({dog: 'sami'});

        expect(animalShelter.db[0]).toEqual({dog: 'sami'});
    })
})