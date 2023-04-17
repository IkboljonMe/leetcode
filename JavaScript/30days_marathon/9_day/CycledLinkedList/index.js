/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//LINK: https://leetcode.com/problems/linked-list-cycle-ii/solutions/3360763/javascript-easy-explanation-100-60ms-90-beats/
var detectCycle = function (head) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let once = head;
  let twice = head;
  while (twice && twice.next) {
    once = once.next;
    twice = twice.next.next;
    if (once === twice) {
      let ptr = head;
      while (ptr !== once) {
        ptr = ptr.next;
        once = once.next;
      }
      return ptr;
    }
  }
  return null;
};
