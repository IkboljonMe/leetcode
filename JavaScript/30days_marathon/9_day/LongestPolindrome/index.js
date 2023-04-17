/**
 * @param {string} s
 * @return {number}
 */
//LINK: https://leetcode.com/problems/longest-palindrome/solutions/3360802/javascript-easy-explanation-58ms-94-22-beats/
var longestPalindrome = function (s) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(N);
  let answer = 0;
  let hashTable = {};
  for (let char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
    if (hashTable[char] % 2 === 0) {
      answer += 2;
    }
  }
  return s.length > answer ? answer + 1 : answer;
};
