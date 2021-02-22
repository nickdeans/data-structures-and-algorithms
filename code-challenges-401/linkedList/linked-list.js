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

    traverse() {
        let current = this.head;

        while(current){
            current = current.next;
        }
    }

    insert(value){
        if(!value){
            throw new Error('This is not the value you are looking for');
        }
        let current = new Node(value);
        current.next = this.head;
        this.head = current;
    }

    includes(value) {
        let current = this.head;
        if(!value){
            throw new Error('Ivalide input');
        }

        while(current) {
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString(){
        let current = this.head;
        if(!current) {
            throw new Error('Invalud input');
        }
        let lastString = '';
        while(current) {
            lastString += `{ ${current.value} } ->`
            current = current.next;
        }
        return lastString += 'null'
    }

}

module.exports = {
    ll: LinkedList,
    node: NodeIterator
};