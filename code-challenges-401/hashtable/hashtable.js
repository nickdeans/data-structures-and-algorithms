'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);

        if(this.head === null) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next;
        }

        current.next = node;
    }
}

class  HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }

    hash(key) {
        let asciiSum = key.split('')
            .reduce((acc, char) => {
                return acc + char.charCodeAt(0);
            }, 0);

        return (asciiSum * 599) % this.size;
    }

    add(key, value) {
        let hash = this.hash(key);

        if(!this.buckets[hash]) {
            this.buckets[hash] = new LinkedList();
        }

        let data = { [key]: value };
        this.buckets[hash].insert(data);
        }
    
    contains(key) {
        let hash = this.hash(key);
        if(this.buckets[hash]) {
            return true;
        } else {
            return false;
        }
    }

    // get(key) {
    //     let hash = this.hash(key)
    //     let bucket = this.bcukets[hash];
    //     let current = bucket.head;
    
    //     while(current) {
    //         if(current.value[key]) {
    //             return current.value[key];
    //         } else if(current.next === null) {
    //             return null;
    //         } else {
    //             current = current.next;
    //         }
    //     }
}

let table = new HashTable(1024);

console.log(table.hash('Nick'));

table.add('James', 'student');
table.add('Bill', 'student');

console.log(table.contains('James'));
console.log(table.contains('Jim'));

// console.log(table.get('James'));
// console.log(JSON.stringify(table));

module.exports = {
    Node, 
    LinkedList,
    HashTable,
};