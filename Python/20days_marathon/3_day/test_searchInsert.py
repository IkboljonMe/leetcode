from searchInsert import Solution

def test_searchInsert():
    solution = Solution()

    # Test case 1: Target value is present in the middle of the list
    nums1 = [1, 3, 5, 7]
    target1 = 4
    assert solution.searchInsert(nums1, target1) == 2

    # Test case 2: Target value is present at the beginning of the list
    nums2 = [1, 3, 5, 7]
    target2 = 1
    assert solution.searchInsert(nums2, target2) == 0

    # Test case 3: Target value is present at the end of the list
    nums3 = [1, 3, 5, 7]
    target3 = 7
    assert solution.searchInsert(nums3, target3) == 3

    # Test case 4: Target value is not present in the list and should be inserted in the middle
    nums4 = [1, 3, 5, 7]
    target4 = 4
    assert solution.searchInsert(nums4, target4) == 2

    # Test case 5: Target value is not present in the list and should be inserted at the beginning
    nums5 = [3, 5, 7]
    target5 = 1
    assert solution.searchInsert(nums5, target5) == 0

    # Test case 6: Target value is not present in the list and should be inserted at the end
    nums6 = [1, 3, 5]
    target6 = 7
    assert solution.searchInsert(nums6, target6) == 3

    #
