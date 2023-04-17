/**
 * @param {number[]} nums
 * @return {number[]}
 */
//LINK: https://leetcode.com/problems/running-sum-of-1d-array/solutions/3338100/simple-javascript-explanation-100-easy/
var runningSum = function (nums) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = sum;
    if (i + 1 < nums.length) {
      sum += nums[i + 1];
    }
  }
  return nums;
};
