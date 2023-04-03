/**
 * @param {number[]} arr
 * @return {boolean}
 */
//LINK: https://leetcode.com/problems/unique-number-of-occurrences/
var uniqueOccurrences = function (arr) {
  const deduplicatedSet = new Set(arr);
  const deduplicatedArray = [...deduplicatedSet];
  const occurrences = [];

  for (let i = 0; i < deduplicatedArray.length; i++) {
    let specificOccurence = 0;
    arr.map((el) => {
      if (el == deduplicatedArray[i]) {
        specificOccurence++;
      }
    });
    occurrences.push(specificOccurence);
  }
  const checkingDuplicationSet = new Set(occurrences);
  const checkingDuplicationSetArr = [...checkingDuplicationSet];

  if (occurrences.length == checkingDuplicationSetArr.length) {
    return true;
  } else {
    return false;
  }
};
module.exports = uniqueOccurrences;
