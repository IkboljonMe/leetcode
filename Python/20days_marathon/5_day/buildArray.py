# LINK: https://leetcode.com/problems/build-array-from-permutation/
# TIME-COMPLEXITY: O(n)
# MEMORY: O(n)
class Solution:
    def buildArray(self, nums):
        n = len(nums)
        ans = []
        for i in range(n):
            if nums[i] < n:
                ans.append(nums[nums[i]])
        return ans
