import pytest
from strStr import Solution

@pytest.fixture
def inputs():
    return [
        ("hello", "", 0),
        ("hello", "world", -1),
        ("hello", "lo", 3),
        ("hello", "ll",2),
        ("hello", "hello", 0)
    ]

def test_strStr(inputs):
        solution = Solution()
        for haystack, needle, number in inputs:
              assert solution.strStr(haystack,needle) == number
