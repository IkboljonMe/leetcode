import pytest
from containsDuplicate import Solution

@pytest.fixture
def inputs():
    return [
        ([1,2,3,4,5], False),
        ([1,2,6,3,2], True),
        ([34,34,2,7,2], True),
        ([12,34,56,67], False),
        ([44,6,7,8,6], True)
    ]

def test_containsDuplicate(inputs):
    s = Solution()
    for nums, expected in inputs:
        assert s.containsDuplicate(nums) == expected