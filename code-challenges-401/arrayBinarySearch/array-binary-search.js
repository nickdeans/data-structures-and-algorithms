'use strict';

const binarySearch = (array,value) => {
    let lowIndex = 0;
    let highIndex = array.length - 1;

    while(lowIndex<=highIndex){
        let midIndex = Math.ceil((highIndex + lowIndex) / 2);
        let midValue = array[midIndex];


        if(value === midValue){
            return -1
        }else if(midValue < value){
            lowIndex = midIndex + 1;
        }else{
            highIndex = midIndex -1;
        }
    }
    return -1;
};

module.exports = binarySearch;