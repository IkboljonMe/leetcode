const uniqueOccurrences = require("../index");

describe("uniqueOccurrences", () => {
  test("returns true for array with unique number of occurrences", () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
  });

  test("returns false for array with non-unique number of occurrences", () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3, 3])).toBe(false);
  });

  test("returns true for empty array", () => {
    expect(uniqueOccurrences([])).toBe(true);
  });

  test("returns true for array with single element", () => {
    expect(uniqueOccurrences([1])).toBe(true);
  });
});
