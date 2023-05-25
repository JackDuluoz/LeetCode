/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function(nums, fn, init) {
  let i = 0
  while (i < nums.length) {
    init = fn(init, nums[i])
    i++
  }
  return init    
};