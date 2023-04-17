const removeDuplicates = require("../index");
describe("removeDuplicates", () => {
  test("should return 3", () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3])).toEqual(
      [1, 2, 3].length
    );
  });
  test("should return 1", () => {
    expect(removeDuplicates([0, 0, 0, 0, 0])).toEqual([0].length);
  });
  test("should return 0", () => {
    expect(removeDuplicates([])).toEqual([].length);
  });
  test("should return 6", () => {
    expect(removeDuplicates([-10, -10, -2, 5, 2, 5, 10, 3])).toEqual(
      [-10, -2, 5, 2, 10, 3].length
    );
  });
});
