const maxProduct = require("../index");
describe("maxProduct", () => {
  it("returns the maximum product of any two elements in the array", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
    expect(maxProduct([-2, 0, -1])).toBe(0);
    expect(maxProduct([0, -1, -2])).toBe(2);
    expect(maxProduct([1, 2, 3, 4, 5])).toBe(120);
    expect(maxProduct([-2, 3, -4])).toBe(24);
  });

  it("returns the only element if the array only has one element", () => {
    expect(maxProduct([5])).toBe(5);
    expect(maxProduct([-3])).toBe(-3);
    expect(maxProduct([0])).toBe(0);
  });

  it("returns this positive number if the array has only one positive element and one or more negative elements", () => {
    expect(maxProduct([-2, 3])).toBe(3);
    expect(maxProduct([2, -3])).toBe(2);
    expect(maxProduct([0, -1, 5])).toBe(5);
  });
});
