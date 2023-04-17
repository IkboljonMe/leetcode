const maxSubArray = require("../inex");

describe("maxSubArray", () => {
  it("returns the maximum subarray sum of an array with positive and negative numbers", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it("returns the only element in the array if there is only one", () => {
    expect(maxSubArray([5])).toEqual(5);
  });

  it("returns 0 if all elements in the array are negative", () => {
    expect(maxSubArray([-1, -2, -3, -4])).toEqual(-1);
  });

  it("returns the maximum subarray sum when all elements in the array are positive", () => {
    expect(maxSubArray([1, 2, 3, 4, 5])).toEqual(15);
  });
});
