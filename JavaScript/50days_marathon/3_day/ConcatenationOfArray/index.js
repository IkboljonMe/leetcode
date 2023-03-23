/**
 * @param {number[]} nums
 * @return {number[]}
 */
//LINK: https://leetcode.com/problems/concatenation-of-array/post-solution/?submissionId=920434253

//TIME-COMPLEXITY: O(n);
//MEMORY: O(1);
var getConcatenation = function (nums) {
  return nums.concat(nums);
};
