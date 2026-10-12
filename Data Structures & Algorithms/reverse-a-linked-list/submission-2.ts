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
    reverseList(head: ListNode | null): ListNode {
        var curr = head;
        var prev = null;
        while (curr){
            //store the old next
            var next = curr.next;
            //set the next to the null
            curr.next = prev;
            //prev becomes this node
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
