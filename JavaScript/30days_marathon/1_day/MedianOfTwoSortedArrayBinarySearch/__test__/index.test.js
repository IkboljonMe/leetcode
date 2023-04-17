const findMedianSortedArrays = require("../index");

describe("findMedianSortedArrays function", () => {
  test("should return 2", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });

  test("should return 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });

  test("should return 3", () => {
    expect(findMedianSortedArrays([1, 2, 3], [4, 5])).toEqual(3);
  });

  test("should return 3.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6])).toEqual(3.5);
  });
});
