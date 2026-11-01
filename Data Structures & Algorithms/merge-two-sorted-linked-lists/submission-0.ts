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
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        var l1 = list1;
        var l2 = list2;
        const dummy = new ListNode(0);
        var tail = dummy

        if (l1 === null) return l2;
        if (l2 === null) return l1;

        while(l1 != null && l2 != null){
            if(l1.val < l2.val){
                tail.next = l1;
                l1 = l1.next;
            }
            else if (l1.val > l2.val){
                tail.next = l2;
                l2 = l2.next;
            }
            else {
                tail.next = l1;
                l1 = l1.next;
            }
            tail = tail.next
        }
        if (l1 === null) tail.next = l2;
        if (l2 === null) tail.next =  l1;
        

        return dummy.next;


    }
}
