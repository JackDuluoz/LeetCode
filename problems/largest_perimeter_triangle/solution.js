/**
 * @param {number[]} nums
 * @return {number}
 */

const largestPerimeter = function(nums) {
  // Sort by number DESC
  nums.sort((a, b) => b - a);
  // Loop until there are only 2 numbers left (too few for a triangle)
  for (let i = 0; i < nums.length - 2; i++) {
    // If the first side is less than the sum of the subsequent two, the conditions are met for a triangle
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      // Return the first (largest perimeter occurrence)
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  // Otherwise return 0 
  return 0;
};

