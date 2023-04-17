const productExceptSelf = require("../index");
describe("productExceptSelf", () => {
  it("returns the correct output for a simple input", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  it("handles an input array with a zero value", () => {
    expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
  });

  it("returns an array of ones for an input array with all values equal to 1", () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });
});
