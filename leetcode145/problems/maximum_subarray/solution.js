/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function(nums) {
        let currSum = 0;
        let maxSum = Math.min(...nums);

        for (i = 0; i < nums.length; i++) {
            currSum += nums[i];

            if (currSum > maxSum) {
            maxSum = currSum;
            }

            if (currSum < 0) {
            currSum = 0;
            }
        }

        return maxSum;


};