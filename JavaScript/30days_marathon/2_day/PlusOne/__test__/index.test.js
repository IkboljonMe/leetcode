const plusOne = require("../index");

describe("plusOne", () => {
  it("should add 1 to the last digit of a number", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("should carry over when adding 1 to 9", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  it("should handle multiple 9s", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it("should handle a single-digit number", () => {
    expect(plusOne([0])).toEqual([1]);
  });
});
