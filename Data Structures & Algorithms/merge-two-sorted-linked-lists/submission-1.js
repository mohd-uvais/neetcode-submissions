/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let list3 = null;
        let temp3 = null;

        if (list1 === null) return list2;
        if (list2 === null) return list1;
        let i = 0;
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                let temp1 = list1;
                list1 = list1.next;
                temp1.next = null;
                if (list3 === null) {
                    list3 = temp1;
                } else {
                    list3.next = temp1;
                    list3 = list3.next
                }
            } else {
                let temp2 = list2;
                list2 = list2.next;
                temp2.next = null;
                if (list3 === null) {
                    list3 = temp2;
                } else {
                    list3.next = temp2;
                    list3 = list3.next
                }
            }

            if (i === 0) {
                temp3 = list3;
            }
            i++;
        }

        while (list1 !== null) {
            let temp1 = list1;
            list1 = list1.next;
            temp1.next = null;
            if (list3 === null) {
                list3 = temp1;
            } else {
                list3.next = temp1;
                list3 = list3.next
            }
            if (i === 0) {
                temp3 = list3;             
            }
            i++;
        }

        while (list2 !== null) {
            let temp2 = list2;
            list2 = list2.next;
            temp2.next = null;
            if (list3 === null) {
                list3 = temp2;
            } else {
                list3.next = temp2;
                list3 = list3.next
            }
            if (i === 0) {
                temp3 = list3;
            }
            i++;
        }

        return temp3;
    }
}
