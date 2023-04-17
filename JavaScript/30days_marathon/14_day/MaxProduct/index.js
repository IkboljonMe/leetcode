/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK: https://leetcode.com/problems/maximum-product-subarray/solutions/3388098/simple-javascript-very-easy-explanation-49ms-98-91beats/
var maxProduct = function (nums) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let globalMaxProduct = nums[0];
  let localMaxProduct = nums[0];
  let localMinProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // We keep a temp variable because we want to keep track of the localMaxProduct before any calculations.
    let prevLocalMaxProduct = localMaxProduct;

    localMaxProduct = Math.max(
      nums[i],
      nums[i] * localMaxProduct,
      nums[i] * localMinProduct
    );
    localMinProduct = Math.min(
      nums[i],
      nums[i] * prevLocalMaxProduct,
      nums[i] * localMinProduct
    );

    globalMaxProduct = Math.max(localMaxProduct, globalMaxProduct);
  }

  return globalMaxProduct;
};
module.exports = maxProduct;
