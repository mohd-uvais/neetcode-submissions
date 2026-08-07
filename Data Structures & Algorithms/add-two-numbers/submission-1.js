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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let val1 = "";
        let val2 = "";
        let sum = 0;

        while (l1 !== null) {
            val1 += l1.val;
            l1 = l1.next;
        }

        while (l2 !== null) {
            val2 += l2.val;
            l2 = l2.next;
        }

        let i = val1.length - 1;
        let fwd1 = "";
        while (i >= 0) {
            fwd1 += val1[i];
            i--;
        }
        i = val2.length - 1;
        let fwd2 = "";
        while (i >= 0) {
            fwd2 += val2[i];
            i--;
        }

        sum = BigInt(fwd1) + BigInt(fwd2);

        sum = sum.toString();
        i = sum.length - 1;
        let fwdSum = "";
        while (i >= 0) {
            fwdSum += sum[i];
            i--;
        }

        let temp = null;
        let head = null;

        for (let ch of fwdSum) {
            let node = new ListNode(BigInt(ch), null);
            if (!temp) {
                temp = node;
                head = temp;
            } else {
                temp.next = node;
                temp = node
            }
        }
        return head;
    }
}
