/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK: https://leetcode.com/problems/single-number/solutions/3367818/beginner-friendly-javascript-bitwise-explanation-47ms-99-83-beats-6-lines-code/
var singleNumber = function (nums) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  if (nums.length < 0) {
    return 0;
  }
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
};
