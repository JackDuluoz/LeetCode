class Solution(object):
    def getConcatenation(self, nums):
        LENGTH = len(nums)
        for num in range(LENGTH):
            nums.append(nums[num])
        return nums


