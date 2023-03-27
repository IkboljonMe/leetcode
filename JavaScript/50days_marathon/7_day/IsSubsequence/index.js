/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//LINK:https://leetcode.com/problems/is-subsequence/solutions/3347967/simple-javascript-100-easy-explanation-90-beats/
var isSubsequence = function (s, t) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let currentIndex = -1;
  for (let i = 0; i < s.length; i++) {
    const target = t.indexOf(s[i], currentIndex + 1);
    if (target > currentIndex) {
      currentIndex = target;
    } else {
      return false;
    }
  }
  return true;
};
