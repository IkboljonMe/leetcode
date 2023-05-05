import pytest
from shuffle import Solution

@pytest.fixture
def inputs():
    return [
        ([1,2,3,4,5,6], 3, [1, 4, 2, 5, 3, 6]),
        ([7,8,9,10,11,12], 3, [7, 10, 8, 11, 9, 12]),
        ([1,2,3,4], 2, [1, 3, 2, 4]),
        ([5,6], 1, [5, 6]),
        ([], 0, [])
    ]

def test_shuffle(inputs):
    s = Solution()
    for nums, n, expected in inputs:
        assert s.shuffle(nums, n) == expected
