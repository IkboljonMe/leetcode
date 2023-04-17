const containsDuplicate = require("../index");

describe("containsDuplicate", () => {
  it("returns true if array contains duplicate elements", () => {
    const nums = [1, 2, 3, 4, 5, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it("returns false if array does not contain duplicate elements", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("returns false for an empty array", () => {
    const nums = [];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("returns true for an array with all the same elements", () => {
    const nums = [1, 1, 1, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
