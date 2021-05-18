'use strict';
const LinkedList= require('../linkedList/linkedList').LinkedList;
function zipLists(list1, list2) {
    let zippedLL = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 || current2) {
        if (current1) {
            zippedLL.append(current1.value);
            current1 = current1.next;
        }
        if (current2) {
            zippedLL.append(current2.value);
            current2 = current2.next;
        }
    }
   
    return zippedLL;
}

module.exports= zipLists;
