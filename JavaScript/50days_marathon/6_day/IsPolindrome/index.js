/**
 * @param {number} x
 * @return {boolean}
 */
//LINK: https://leetcode.com/problems/palindrome-number/solutions/3341636/javascript-100-easy-explanation-overall-o-1-space/
var isPalindrome = function (x) {
  /*
    // 1st solution
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(1);
    const string = x.toString();
    let currentIndex = 0;
    for (let i = string.length - 1; i >= 0; i--) {
      if (string.charAt(currentIndex) != string.charAt(i)) {
        return false;
      }
      currentIndex++;
    }
    return true;
    */

  // 2nd solution
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  const str = x.toString();
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};
