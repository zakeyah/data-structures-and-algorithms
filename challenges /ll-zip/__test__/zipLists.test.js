'use strict';
const LinkedList = require('../../linkedList/linkedList').LinkedList;
const zipLists = require('../ll-zip');


describe('test ll-zip ', () => {
    it('should Zip the two linked lists together into one ', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();



        list1.insert(2);
        list1.insert(3);
        list1.insert(1);

        list2.insert(4);
        list2.insert(9);
        list2.insert(5);

        const mergedList = zipLists(list1, list2);
        expect(mergedList.head.value).toEqual(1);
        expect(mergedList.head.next.value).toEqual(5);
        expect(mergedList.head.next.next.value).toEqual(3);
        expect(mergedList.head.next.next.next.value).toEqual(9);
        expect(mergedList.head.next.next.next.next.value).toEqual(2);
        expect(mergedList.head.next.next.next.next.next.value).toEqual(4);
    });
    
});