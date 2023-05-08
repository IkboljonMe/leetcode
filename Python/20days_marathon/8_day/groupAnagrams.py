# LINK: https://leetcode.com/problems/group-anagrams/
# COMPLEXITY: The time complexity is O(N * K * log K), and the space complexity is O(N * K), where N is the number of strings in the input list strs, and K is the maximum length of a string in strs.
import collections
class Solution:
    def groupAnagrams(self, strs):
        ans = collections.defaultdict(list)
        for s in strs:
            count = [0]*26
            for c in s:
                count[ord(c)-ord('a')] += 1
            ans[tuple(count)].append(s)
        return ans.values()