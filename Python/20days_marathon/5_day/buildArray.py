# LINK: https://leetcode.com/problems/build-array-from-permutation/
# TIME-COMPLEXITY: O(n)
# MEMORY: O(n)
class Solution:
    def buildArray(self, nums):
        ans = []
        for i in range(len(nums)):
            ans.append(nums[nums[i]])
        return ans