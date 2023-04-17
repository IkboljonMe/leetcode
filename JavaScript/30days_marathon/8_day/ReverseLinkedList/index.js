/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//LINK: https://leetcode.com/problems/reverse-linked-list/solutions/3353402/simple-javascript-98-beats-easy-explanation/
var reverseList = function (head) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
