// Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

const maxSubArray = function (nums) {
  // KADANE'S ALGORITHM
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

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1]))                     // 1
console.log(maxSubArray([5,4,-1,7,8]))            // 23