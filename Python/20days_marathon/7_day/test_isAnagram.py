import pytest
from isAnagram import Solution

@pytest.fixture
def inputs():
    return [
        ("anagram","naagram",True),
        ("school","cshool",True),
        ("best","sdsdsdf",False),
        ("tim","emri",False)
    ]
def test_isAnagram(inputs):
    solution = Solution()
    for s,t, expected in inputs:
        assert solution.isAnagram(s,t) == expected