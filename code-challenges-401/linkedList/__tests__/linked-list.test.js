'use strict';

const linkedList = require('../linked-list.js');

const linkedListTwo = linkedList.ll;
const Node = linkedList.node;

describe('testing linked list', () => {
    it('should return a linekd list', () => {
        const ll = new linkedListTwo;
        expect(ll).toBeTruthy();
    });

    it('Should return a value to that of the first node', () => {
        const ll = new linkedListTwo;
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        
        expect(ll.head.value).toEqual(1);
    });

    it('Should test ability to insert several nodes into list', () => {
        const ll = new linkedListTwo;
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        expect(ll.head.value).toEqual(1);
        expect(ll.head.next.value).toEqual(2);
        expect(ll.head.next.next.value).toEqual(3);
    });

    it('Should test function for searching a specific value in linked list', () => {
        const ll = new linkedListTwo;
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        expect(ll.includes(3)).toBeTruthy();
    });

    it('Should return false if target value is not present', () => {
        const ll = new linkedListTwo;
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        expect(ll.includes(3)).toBeTruthy();
        expect(ll.includes(6)).toEqual(false);
    });

    it('Should return a string of value within a linked list', () => {
        const ll = new linkedListTwo;
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);
        expect(ll.toString()).toEqual('{ 1 } ->{ 2 } ->{ 3 } ->null')
    });
});

describe('testing linked list class that takes in a number k', () => {
    it('Should return invalid input if k is greater than length of list', () => {
        const ll = new linkedListTwo;
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

    expect(ll.nthValueAtEnd(5)).toEqual('invalid input')
    })

    it('Should return invalid input if k is length', () => {
        const ll = new linkedListTwo;
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

    expect(ll.nthValueAtEnd(4)).toEqual('invalid input')
    })

    it('Should return invalid input if k is negative number', () => {
        const ll = new linkedListTwo;
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

    expect(ll.nthValueAtEnd(-2)).toEqual('invalid input')
    })

    it('Should return value if linked list has one node and k=0', () => {
        const ll = new linkedListTwo;
        ll.insert(1);

        expect(ll.nthValueAtEnd(0)).toEqual(1);
    })

    it('Should return invalid input if k is greater than length of list', () => {
        const ll = new linkedListTwo;
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

    expect(ll.nthValueAtEnd(2)).toEqual(2);
    })
})



