/**
 * @param {number[]} nums
 * @return {number[]}
 */

const getConcatenation = function(nums) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    nums.push(nums[i])
  }
  return nums
};

