'use strict';

const array = [1,2,7,9];

const insertShiftArray = (arr, value) => {
  let newArray = [];
  const middleIndex = Math.ceil(arr.length/2);
  for(let i=0;i<arr.length;i++){
    if(i === middleIndex){
          newArray.push(value);
          newArray.push(arr[i]);
    }else{
          newArray.push(arr[i]);
    }
  }
  return newArray;
};

insertShiftArray(array, 5);

module.exports = insertShiftArray;