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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null || head.next === null) return head;
        let temp1 = head;
        let temp2 = null;

        while (head !== null) {
            head = head.next;
            temp1.next = temp2;
            temp2 = temp1;
            temp1 = head;
        }

        return temp2;
    }
}
