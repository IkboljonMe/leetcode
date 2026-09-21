# LeetCode Solutions

My solutions to [LeetCode](https://leetcode.com/ikboljonme/) problems in JavaScript and Python. I did them as daily "marathons" (30 days in JS, 20 days in Python) to get better at algorithms and data structures. Every solution has tests, and most of them have a link to my explanation on LeetCode.

## Built with

- JavaScript (Node.js) + [Jest](https://jestjs.io/) for tests
- Python 3 + [pytest](https://pytest.org/) for tests

## How to run

```bash
git clone https://github.com/IkboljonMe/leetcode.git
cd leetcode
```

### JavaScript

```bash
cd JavaScript
npm install
npm test
```

Run tests for one problem:

```bash
npm test -- 30days_marathon/2_day/PlusOne
```

### Python

```bash
cd Python
pip install -r requirements.txt
pytest
```

Run tests for one problem:

```bash
pytest -k "isAnagram"
```

## JavaScript problems

| Day | Problem | Difficulty | Solution |
| --- | --- | --- | --- |
| 1 | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | [code](JavaScript/30days_marathon/1_day/MedianOfTwoSortedArrayBinarySearch) |
| 1 | [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | [code](JavaScript/30days_marathon/1_day/RemoveDuplicatesFromArray) |
| 1 | [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/) | Easy | [code](JavaScript/30days_marathon/1_day/UniqueOccurrences) |
| 2 | [66. Plus One](https://leetcode.com/problems/plus-one/) | Easy | [code](JavaScript/30days_marathon/2_day/PlusOne) |
| 3 | [1929. Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) | Easy | [code](JavaScript/30days_marathon/3_day/ConcatenationOfArray) |
| 3 | [268. Missing Number](https://leetcode.com/problems/missing-number/) | Easy | [code](JavaScript/30days_marathon/3_day/MissingNumberInArray) |
| 4 | [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | [code](JavaScript/30days_marathon/4_day/MaxProfitArray) |
| 5 | [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) (O(1) memory) | Easy | [code](JavaScript/30days_marathon/5_day/DeduplicationInSortedArray) |
| 5 | [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | Easy | [code](JavaScript/30days_marathon/5_day/RunningSumOfArray) |
| 6 | [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Easy | [code](JavaScript/30days_marathon/6_day/IsPalindrome) |
| 7 | [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | Easy | [code](JavaScript/30days_marathon/7_day/IsIsomorphic) |
| 7 | [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/) | Easy | [code](JavaScript/30days_marathon/7_day/IsSubsequence) |
| 8 | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | [code](JavaScript/30days_marathon/8_day/MergeTwoSortedList) |
| 8 | [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | Easy | [code](JavaScript/30days_marathon/8_day/ReverseLinkedList) |
| 9 | [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | Easy | [code](JavaScript/30days_marathon/9_day/CycledLinkedList) |
| 9 | [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/) | Easy | [code](JavaScript/30days_marathon/9_day/LongestPalindrome) |
| 9 | [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | [code](JavaScript/30days_marathon/9_day/MiddleOfLinkedList) |
| 10 | [136. Single Number](https://leetcode.com/problems/single-number/) | Easy | [code](JavaScript/30days_marathon/10_day/SingleNumber) |
| 11 | [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | Easy | [code](JavaScript/30days_marathon/11_day/IntersectionOfTwoArray) |
| 12 | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | [code](JavaScript/30days_marathon/12_day/ContainsDuplicate) |
| 12 | [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) | Medium | [code](JavaScript/30days_marathon/12_day/SumOfTwoInteger) |
| 13 | [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | [code](JavaScript/30days_marathon/13_day/ProductExceptSelf) |
| 14 | [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | Medium | [code](JavaScript/30days_marathon/14_day/MaxProduct) |
| 14 | [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Medium | [code](JavaScript/30days_marathon/14_day/MaxSubarray) |
| 15 | [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | [code](JavaScript/30days_marathon/15_day/FindMin) |
| 16 | [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | [code](JavaScript/30days_marathon/16_day/SearchInRotatedSortedArray) |
| 17 | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | Easy | [code](JavaScript/30days_marathon/17_day/ClimbStairs) |

## Python problems

| Day | Problem | Difficulty | Solution |
| --- | --- | --- | --- |
| 1 | [27. Remove Element](https://leetcode.com/problems/remove-element/) | Easy | [code](Python/20days_marathon/1_day/removeElement.py) |
| 2 | [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | Easy | [code](Python/20days_marathon/2_day/strStr.py) |
| 3 | [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/) | Easy | [code](Python/20days_marathon/3_day/searchInsert.py) |
| 4 | [1470. Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/) | Easy | [code](Python/20days_marathon/4_day/shuffle.py) |
| 5 | [1920. Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/) | Easy | [code](Python/20days_marathon/5_day/buildArray.py) |
| 6 | [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | [code](Python/20days_marathon/6_day/containsDuplicate.py) |
| 7 | [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | [code](Python/20days_marathon/7_day/isAnagram.py) |
| 8 | [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | [code](Python/20days_marathon/8_day/groupAnagrams.py) |
| 9 | [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | [code](Python/20days_marathon/9_day/isValidSudoku.py) |

## License

MIT, see [LICENSE](LICENSE.txt).

---

Made by [IkboljonMe](https://github.com/IkboljonMe)
