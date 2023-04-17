/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//LINK: https://leetcode.com/problems/merge-two-sorted-lists/solutions/3353373/javascript-easy-explanation-100-for-loop/
var mergeTwoLists = function (l1, l2) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};
