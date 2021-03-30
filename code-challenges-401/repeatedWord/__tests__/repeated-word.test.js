'use strict';

const repeatedWord = require('../repeated-word.js');

describe('testing repeatWord function', () => {
    it('should return the first repeated word', () => {
        let string = 'Hello, I am nick and I like ice cream.'

        expect(repeatedWord(string)).toEqual('I');
    })
})