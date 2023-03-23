/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK:https://leetcode.com/problems/missing-number/
var missingNumber = function (nums) {
  /*
    //FIRST SOLUTION
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(n) because of Math.min()=>we should avoid this to reach O(1); 
    const n = nums.length;
    const min = Math.min(...nums);
    if(min !== 0){
        return 0;
    } 
    const max = min+n;
    let missedSum = 0;
    const sum = (min+max)/2*(n+1);
    for(let i = 0; i<n; i++){
        missedSum+=nums[i];
    }
    return sum - missedSum;
    */

  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);

  const n = nums.length;
  let min = nums[0];
  for (let i = 1; i < n; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }
  if (min !== 0) {
    return 0;
  }
  const max = min + n;
  let missedSum = 0;
  const sum = ((min + max) / 2) * (n + 1);
  for (let i = 0; i < n; i++) {
    missedSum += nums[i];
  }
  return sum - missedSum;
};
