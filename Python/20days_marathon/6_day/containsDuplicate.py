# LINK: https://leetcode.com/problems/contains-duplicate/
# TIME-COMPLEXITY: O(n)
# MEMORY: O(n)
class Solution:
    def containsDuplicate(self, nums):
        hashset = set(nums)
        if len(hashset) == len(nums):
            return False
        else:
            return True