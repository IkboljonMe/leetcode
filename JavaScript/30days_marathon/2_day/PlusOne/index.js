/**
 * @param {number[]} digits
 * @return {number[]}
 */
//LINK: https://leetcode.com/problems/plus-one/
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (index >= 0 && digits[index] === 9) {
    digits[index] = 0;
    index--;
  }
  if (index == -1) {
    digits.unshift(1);
  } else {
    digits[index]++;
  }
  return digits;
};
module.exports = plusOne;
