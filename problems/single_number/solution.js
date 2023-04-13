/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {

  if (nums.length === 1) {
    return nums[0]
  }
  nums.sort()
  let i = 0
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i += 2
    } else {
      return nums[i]
    }
  }

};