import pytest
from buildArray import Solution

@pytest.fixture
def inputs():
    return [
        ([0, 2, 1, 5, 3, 4], [0, 1, 2, 4, 5, 3]),
        ([1, 3, 2, 1], [3, 1, 2, 3]),
        ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        ([], []),
        ([1], []),
    ]

def test_buildArray(inputs):
    s = Solution()
    for input_list, expected_output in inputs:
        assert s.buildArray(input_list) == expected_output
