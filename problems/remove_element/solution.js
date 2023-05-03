/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function(nums, val) {

  let i = 0  
  while (i < nums.length) {
    if (nums[i] !== val) {
      i++
    } else {
      nums.splice(i, 1)
    }
  }



};