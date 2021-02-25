'use strict';

const linkedList = require('../ll-zip.js');

describe('testing zipLists functionality', () => {
    it('should zip two linked lists', () => {
        const list1 = new linkedList.ll();
        list1.head = new linkedList.node(1);
        list1.head.next = new linkedList.node(3);
        list1.head.next.next = new linkedList.node(2);

        const list2 = new linkedList.ll();
        list2.head = new linkedList.node(5);
        list2.head.next = new linkedList.node(9);
        list2.head.next.next = new linkedList.node(4);

        const testing = linkedList.zip(list1, list2);

        expect(testing).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 2 } ->{ 4 } ->null');
    })

    it('should zip two linked lists', () => {
        const list1 = new linkedList.ll();
        list1.head = new linkedList.node(1);
        list1.head.next = new linkedList.node(3);

        const list2 = new linkedList.ll();
        list2.head = new linkedList.node(5);
        list2.head.next = new linkedList.node(9);
        list2.head.next.next = new linkedList.node(4);

        const testing = linkedList.zip(list1, list2);

        expect(testing).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 4 } ->null');
    })

    it('should zip two linked lists', () => {
        const list1 = new linkedList.ll();
        list1.head = new linkedList.node(1);
        list1.head.next = new linkedList.node(3);
        list1.head.next.next = new linkedList.node(2);

        const list2 = new linkedList.ll();
        list2.head = new linkedList.node(5);
        list2.head.next = new linkedList.node(9);

        const testing = linkedList.zip(list1, list2);

        expect(testing).toEqual('{ 1 } ->{ 5 } ->{ 3 } ->{ 9 } ->{ 2 } ->null');
    })
})