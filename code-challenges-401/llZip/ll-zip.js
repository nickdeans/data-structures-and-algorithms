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
            throw new Node('This is not the value you are looking for');
        }
        let current = new Node(value);
        current.next = this.head;
        this.head = current;
    }

    includes(value) {
        let current = this.head;
        if(!value){
            throw new Node('Ivalid input');
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
            throw new Node('Invalud input');
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

function zipLists(list1, list2) {
    const newList = new LinkedList();
    list1 = list1.head;
    list2 = list2.head;
    newList.head = new Node(list1.value);
    list1 = list1.next;

    while(list1 || list2) {
        if(list1 && list2) {
            newList.append(list2.value);
            newList.append(list1.value);
            list2 = list2.next;
            list1 = list1.next;
        }else if(list1 === null && list2) {
            newList.append(list2.value);
            list2 = list2.next;
        }else if(list1 && list2 === null) {
            newList.append(list1.value);
            list1 = list1.next;
        }else {
            return;
        }
    }
    return newList.toString();
}

const listOne = new LinkedList();
listOne.head = new Node(0);
listOne.head.next = new Node(1);
listOne.head.next.next = new Node(2);
listOne.head.next.next.next = new Node(3);
listOne.head.next.next.next.next = new Node(4);

const listTwo = new LinkedList();
listTwo.head = new Node(5);
listTwo.head.next = new Node(6);
listTwo.head.next.next = new Node(7);
listTwo.head.next.next.next = new Node(8);

module.exports = {
    ll: LinkedList,
    node: Node,
    zip: zipLists,
};