class Solution(object):
    def countNegatives(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        negatives = 0
        for sub_array in grid:
            for index in sub_array:
                if index < 0:
                    negatives += 1

        return negatives
