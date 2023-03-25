/**
 * @param {number[]} nums
 * @return {number}
 */
//LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3337993/javascript-o-1-extra-memory-99-beats/
var removeDuplicates = function (nums) {
  /*
    // 1st solution *
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(n);
    var deduplicatedSet = new Set(nums);
    var deduplicatedArray = Array.from(deduplicatedSet);
    for (var i = 0; i < deduplicatedArray.length; i++) {
      nums[i] = deduplicatedArray[i];
    }
    nums.length = deduplicatedArray.length;
    return nums.length;
    */

  /*
    // 2nd solution **
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(n);
    let arr = [];
    for(let i = -1; i<nums.length-1;i++ ){
      if(nums[i+1] !== nums[i]){
        arr.push(nums[i+1])
      } 
    }
    for (let i = 0; i<arr.length;i++){
      nums[i]=arr[i]
    }
    nums.length = arr.length
    return nums.length
    */
  // 3rd solution ***
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  let currentIndex = 0;
  for (let i = -1; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) {
      nums[currentIndex] = nums[i + 1];
      currentIndex++;
    }
  }
  nums.length = currentIndex;
  return nums.length;
};
