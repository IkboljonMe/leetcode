import pytest
from removeElement import Solution

@pytest.fixture
def inputs():
    return [
        ([3, 2, 2, 3], 3, 2),
        ([0, 1, 2, 2, 3, 0, 4, 2], 2, 5)
    ]

def test_removeElement(inputs):
    s = Solution()

    for nums, val, expected_result in inputs:
        assert s.removeElement(nums, val) == expected_result
