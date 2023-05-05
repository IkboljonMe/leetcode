# LINK: https://leetcode.com/problems/build-array-from-permutation/
from buildArray import Solution
nums1 = [0, 2, 1, 5, 3, 4]
nums2 = [1, 3, 2, 1]
nums3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
s = Solution()
#TEST1
assert s.buildArray(nums1) == [0, 1, 2, 4, 5, 3]
#TEST1
assert s.buildArray(nums2) == [3, 1, 2, 3]
#TEST1
assert s.buildArray(nums3) == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]