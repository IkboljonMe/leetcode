/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK: https://leetcode.com/problems/maximum-subarray/solutions/3388070/javascriptkadanes-algorithmeasy-explanationtutorial70ms9615beats/
var maxSubArray = function (nums) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
module.exports = maxSubArray;
