class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        copyN = n
        arr=[]
        for i in range(n):
            arr.append(nums[i])
            arr.append(nums[copyN+i])
        return arr
