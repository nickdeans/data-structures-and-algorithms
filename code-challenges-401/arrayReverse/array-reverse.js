'use strict';

const array = [1,2,3,4,5,6,7,8,9];

const reverseArray = (arr) => {
    let newArray = [];
    for(let i=arr.length - 1;i>=0;i--){
        newArray.push(arr[i]);
    }
    return newArray;
};

reverseArray(array);