from strStr import Solution
def test_strStr():
    s = Solution()
    
    # Test case 1: needle is an empty string
    assert s.strStr("hello", "") == 0
    
    # Test case 2: needle is not present in haystack
    assert s.strStr("hello", "world") == -1
    
    # Test case 3: needle is present at the beginning of haystack
    assert s.strStr("hello", "he") == 0
    
    # Test case 4: needle is present at the end of haystack
    assert s.strStr("hello", "lo") == 3
    
    # Test case 5: needle is present in the middle of haystack
    assert s.strStr("hello", "ll") == 2
    
    # Test case 6: needle is equal to haystack
    assert s.strStr("hello", "hello") == 0
    
    # Test case 7: needle is a single character
    assert s.strStr("hello", "l") == 2
    
    # Test case 8: needle and haystack are both empty strings
    assert s.strStr("", "") == 0
    
    print("All test cases pass")

