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
//LINK: https://leetcode.com/problems/middle-of-the-linked-list/solutions/3360692/javascript-100-easy-with-simple-explanation-two-pointers/
var middleNode = function (head) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let twice = head;
  let once = head;
  while (twice && twice.next) {
    twice = twice.next.next;
    once = once.next;
  }
  return once;
};
