/**
 * @param {number[]} nums
 * @return {number[]}
 */
//LINK: https://leetcode.com/problems/product-of-array-except-self/solutions/3384653/javascript-no-division-with-easy-explanation-o-1-space-94-beats-two-solution/
var productExceptSelf = function (nums) {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  /*
  //1st solution
  //TIME: O(n)
  //MEMORY: O(n)
  let leftArr = [];
  let rightArr = [];
  let result = [];
  let left = 1;
  let right = 1;
  const length = nums.length - 1;
  let rIndex = length - 1;
  let lIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    left = left * nums[i];
    leftArr.push(left);
  }
  for (let i = nums.length - 1; i > -1; i--) {
    right = right * nums[i];
    rightArr.push(right);
  }
  console.log(leftArr, rightArr);
  for (let i = 0; i < nums.length; i++) {
    const res =
      (lIndex == -1 ? 1 : leftArr[lIndex]) *
      (rIndex == -1 ? 1 : rightArr[rIndex]);
    result.push(res);
    rIndex--;
    lIndex++;
  }
  return result;
  */
  //TIME: O(n)
  //MEMORY: O(1)
  let result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    // compute left product for nums[i]
    result[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    // compute right product for nums[i] and multiply it with the left product
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};
module.exports = productExceptSelf;
