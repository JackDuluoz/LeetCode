class Solution(object):
    def shuffle(self, nums, n):
        RESULT = []
        i = 0
        while i < n:
            RESULT.extend((nums[i], nums[i + n]))
            i += 1
        return RESULT