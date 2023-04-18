from removeElement import Solution

def test_removeElement():
    s = Solution()
    
    nums = [3, 2, 2, 3]
    val = 3
    expected_result = 2
    
    assert s.removeElement(nums, val) == expected_result
    
    nums = [0, 1, 2, 2, 3, 0, 4, 2]
    val = 2
    expected_result = 5
    
    assert s.removeElement(nums, val) == expected_result
