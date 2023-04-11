const climbStairs = require("../index");
describe("climbStairs", () => {
  test("returns 1 when n is 1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  test("returns 2 when n is 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  test("returns 3 when n is 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  test("returns 5 when n is 4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  test("returns 8 when n is 5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  test("returns 13 when n is 6", () => {
    expect(climbStairs(6)).toBe(13);
  });

  // Add more test cases for edge cases, large values of n, negative values of n, etc.
});
