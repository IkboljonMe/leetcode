const intersection = require("../index");

describe("intersection af two array", () => {
  test("should return an array of common elements", () => {
    expect(intersection([1, 2, 2, 4], [2, 2, 5])).toEqual([2]);
    expect(intersection([1, 2, 3, 4], [2, 3, 5])).toEqual([2, 3]);
  });

  test("should return an empty array if there are no common elements", () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(intersection([1, 2, 3], [9, 4, 5])).toEqual([]);
  });
});
