'use strict';

const hashTable = require('../hashtable/hashtable.js');

const leftJoin = (map1, map2) => {
  
    const table = [];

    if(!map1 || !map2 || map1.buckets.length === 0 || map2.buckets.length === 0){
        return false;
    }
    
    let left = map1.buckets.filter(item => item !== undefined);

    for(let i = 0; i < left.length; i++) {
        if(left[i].length === 1) {
            let index = left[i][0];
            table.push(index);
            if(map2.contains(index[0])) {
                let copy = map2.get(index[0]);
                table[table.indexOf(index)].push(copy);
            }else{
                table[table.indexOf(index)].push(null);
            }
        }else{
            for(let j in left[i]) {
                let index = left[i][j];
                table.push(index);
                if(hash2.contains(index[0])) {
                    table[table.indexOf(index)].push(hash2.get(index[0]));
                }else{
                    table[table.indexOf(index)].push(null);
                }
            }
        }
    }
    return table;
}

module.exports = leftJoin;