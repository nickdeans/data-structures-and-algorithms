'use strict';

function quickSort(array, left, right) {
    if(left < right) {
        let position = partition(array, left, right);
        quickSort(array, left, position - 1);
        quickSort(array, position + 1, right);
    }
    return array;
};

function partition(array, left, right) {
    let pivot = array[right];
    let low = left - 1;
    for(let i=left; i<right; i++) {
        if(array[i] <= pivot) {
            low++;
            swap(array, i, low);
        }
    }
    swap(array, right, low + 1);
    return low + 1;
}

function swap(array, i, low) {
    let temp = array[i];
    array[i] = array[low];
    array[low] = temp;
}

let arr = [8,4,23,42,16,15];

console.log(quickSort(arr, 0, 5))

module.exports = quickSort;