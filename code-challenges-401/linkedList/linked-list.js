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

    append(value) {
        let current = this.head;

        while(current.next){
            current = current.next;
        }
        current.next = new Node(value);
    }

    insertBefore(value, newVal) {
        let current = this.head;
        if(current.value === newVal){
            this.insert(value);
        }else{
            while(current.next.value !== newVal) {
                current = current.next;
            }
            let temp = new Node(value);
            temp.next = current.next;
            current.next = temp;
        }
    }

    insertAfter(value, newValue) {
        let current = this.head;
        while(current.value !== newValue){
            current = current.next;
        }
        let temp = new Node(value);
        temp.next = current.next;
        current.next = temp;
    }

    nthValueAtEnd(k) {
        let llArr = [];
        let current = this.head;
        while(current) {
            llArr.push(current.value);
            current = current.next;
        }
        llArr.reverse();
        if(k>=llArr.length || k<0){
            return 'invalid input';
        }else{
            return llArr[k];
        }
    }
}

module.exports = {
    ll: LinkedList,
    node: NodeIterator
};