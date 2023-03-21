/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//LINK: https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/919106534/
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let x = nums1.length;
  let y = nums2.length;
  let low = 0,
    high = x;
  while (low <= high) {
    const partitionX = (high + low) >> 1;
    const partitionY = ((x + y + 1) >> 1) - partitionX;

    const maxX =
      partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxY =
      partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minX = partitionX == x ? Number.POSITIVE_INFINITY : nums1[partitionX];
    const minY = partitionY == y ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      const calculatedMax = Math.max(maxX, maxY);
      const calculatedMin = Math.min(minX, minY);
      if ((x + y) % 2 == 1) {
        return calculatedMax;
      }

      return (calculatedMax + calculatedMin) / 2;
    } else if (maxX < minY) {
      low = partitionX + 1;
    } else high = partitionX - 1;
  }
};
