'use strict';

const hashtable = require('../hashtable/hashtable.js');

const repeatedWord = (text) => {
    let hashtable = new hashtable.HashTable(1024);
    let stringText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();
    const firstMatch = [];
    const string = text.split(' ');


    for(let i = 0; i < string.length; i++) {
        hashtable.add(string[i], i);
    }
    
    for(let j = 0; j < string.length; j++) {
        let check = hashtable.get(string[j]);
        if(check[1]) {
            let firstRepeat = { index: check[1], word: string[j] }
        };
        if(!firstMatch.length || check[1] > firstMatch[0].index) {
            firstMatch.push(firstRepeat);
        }else{
            firstMatch.unshift(firstRepeat);
        }
    }
    if(firstMatch.length) {
        return firstMatch[0].word;
    }
}

module.exports = repeatedWord;