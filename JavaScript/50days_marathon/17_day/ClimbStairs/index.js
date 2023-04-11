/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  if (dp[n]) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
module.exports = climbStairs;
