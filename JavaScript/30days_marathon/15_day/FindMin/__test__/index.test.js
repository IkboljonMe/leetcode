const findMin = require("../index");
describe("findMin", () => {
  it("should return the minimum element in a rotated sorted array", () => {
    const nums1 = [4, 5, 6, 7, 0, 1, 2, 3];
    const nums2 = [11, 13, 15, 17, 2, 4, 6, 8];
    const nums3 = [2, 4, 6, 8, 11, 13, 15, 17];
    expect(findMin(nums1)).toBe(0);
    expect(findMin(nums2)).toBe(2);
    expect(findMin(nums3)).toBe(2);
  });
});
