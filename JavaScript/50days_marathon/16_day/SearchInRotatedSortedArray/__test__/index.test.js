const search = require("../index");
describe("search", () => {
  test("returns the index of the target element in a sorted array", () => {
    expect(search([1, 3, 5, 7, 9], 5)).toBe(2);
    expect(search([0, 2, 4, 6, 8], 0)).toBe(0);
    expect(search([10, 20, 30, 40, 50], 40)).toBe(3);
    expect(search([5, 10, 15, 20, 25, 30], 20)).toBe(3);
    expect(search([1], 1)).toBe(0);
  });

  test("returns -1 when the target element is not in the array", () => {
    expect(search([1, 3, 5, 7, 9], 2)).toBe(-1);
    expect(search([0, 2, 4, 6, 8], 1)).toBe(-1);
    expect(search([10, 20, 30, 40, 50], 35)).toBe(-1);
    expect(search([5, 10, 15, 20, 25, 30], 22)).toBe(-1);
    expect(search([], 1)).toBe(-1);
  });

  test("works correctly with rotated arrays", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(search([7, 8, 1, 2, 3, 4, 5, 6], 2)).toBe(3);
    expect(search([7, 8, 1, 2, 3, 4, 5, 6], 5)).toBe(6);
  });
});
