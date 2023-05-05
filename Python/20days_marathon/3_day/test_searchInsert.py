import pytest
from searchInsert import Solution

@pytest.mark.parametrize("sorted_list, target_value, expected_output", [
    ([1, 3, 5, 7], 4, 2),
    ([1, 3, 5, 7], 1, 0),
    ([1, 3, 5, 7], 7, 3),
    ([1, 3, 5, 7], 4, 2),
    ([3, 5, 7], 1, 0),
    ([1, 3, 5], 7, 3),
])
def test_searchInsert(sorted_list, target_value, expected_output):
    solution = Solution()
    assert solution.searchInsert(sorted_list, target_value) == expected_output
