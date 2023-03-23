/**
 * @param {number[]} prices
 * @return {number}
 */

//LINK: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3333942/javascript-99-99-beats/
//TIME-COMPLEXITY: O(n);
//MEMORY: O(1);
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }
  return maxProfit;
};
