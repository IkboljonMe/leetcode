/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (nums) {
  var deduplicatedSet = new Set(nums);
  var deduplicatedArray = Array.from(deduplicatedSet);
  for (var i = 0; i < deduplicatedArray.length; i++) {
    nums[i] = deduplicatedArray[i];
  }
  nums.length = deduplicatedArray.length;
  return nums.length;
};
