from shuffle import Solution
# Test Case 1
nums = [1,2,3,4,5,6]
n = 3
s = Solution()
assert s.shuffle(nums, n) == [1, 4, 2, 5, 3, 6]

# Test Case 2
nums = [7,8,9,10,11,12]
n = 3
s = Solution()
assert s.shuffle(nums, n) == [7, 10, 8, 11, 9, 12]

# Test Case 3
nums = [1,2,3,4]
n = 2
s = Solution()
assert s.shuffle(nums, n) == [1, 3, 2, 4]

# Test Case 4
nums = [5,6]
n = 1
s = Solution()
assert s.shuffle(nums, n) == [5, 6]

# Test Case 5
nums = []
n = 0
s = Solution()
assert s.shuffle(nums, n) == []
