/**
 * @param {number[]} nums
 * @return {boolean}
 */
//LINK: https://leetcode.com/problems/contains-duplicate/solutions/3380086/4-line-solutionjavascripteasy-explanation9971-beats/
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  if (set.size == nums.length) {
    return false;
  }
  return true;
};
module.exports = containsDuplicate;
