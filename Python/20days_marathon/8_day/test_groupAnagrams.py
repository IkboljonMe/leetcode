import pytest
from groupAnagrams import Solution

@pytest.fixture
def inputs():
    test_cases = [
        (["eat", "tea", "tan", "ate", "nat", "bat"], [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]),
        (["", ""], [['', '']]),
        (["a"], [['a']]),
        (["ab", "ba"], [['ab', 'ba']]),
        (["hello", "world"], [['hello'], ['world']]),
    ]
    return test_cases
def test_groupAnagrams(inputs):
    s = Solution()
    for strs, expected in inputs:
        actual = s.groupAnagrams(strs)
        actual_list = [sorted(g) for g in actual]
        expected_list = [sorted(g) for g in expected]
        assert actual_list == expected_list

