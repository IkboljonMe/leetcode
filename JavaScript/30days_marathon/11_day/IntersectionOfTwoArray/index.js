/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//LINK: https://leetcode.com/problems/intersection-of-two-arrays/solutions/3376606/easy-javascript-explanation-55ms-91-62-beats/
var intersection = function (nums1, nums2) {
  //WE CAN USE SET TO OPTIMIZE BOTH
  //TIME AND SPACE COMPLEXITY
  //TIME: O(n^2)
  //MEMORY: O(1)
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (!result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }
  return result;
};
module.exports = intersection;
