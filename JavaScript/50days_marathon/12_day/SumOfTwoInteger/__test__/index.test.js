const getSum = require("../index");
describe("getSum", () => {
  it("returns the correct sum of two positive numbers", () => {
    expect(getSum(2, 3)).toBe(5);
    expect(getSum(10, 5)).toBe(15);
    expect(getSum(100, 50)).toBe(150);
  });

  it("returns the correct sum of two negative numbers", () => {
    expect(getSum(-2, -3)).toBe(-5);
    expect(getSum(-10, -5)).toBe(-15);
    expect(getSum(-100, -50)).toBe(-150);
  });

  it("returns the correct sum of a positive and a negative number", () => {
    expect(getSum(2, -3)).toBe(-1);
    expect(getSum(10, -5)).toBe(5);
    expect(getSum(100, -50)).toBe(50);
  });

  it("returns the correct sum of a number and zero", () => {
    expect(getSum(2, 0)).toBe(2);
    expect(getSum(10, 0)).toBe(10);
    expect(getSum(-100, 0)).toBe(-100);
  });
});
