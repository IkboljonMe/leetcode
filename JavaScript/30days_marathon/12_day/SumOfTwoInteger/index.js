/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//LINK: https://leetcode.com/submissions/detail/928118979/
var getSum = function (a, b) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};
module.exports = getSum;
