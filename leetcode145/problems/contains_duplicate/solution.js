/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function(nums) {
    nums.sort()
    for (let num in nums) {
        if (nums[num] === nums[num - 1]) {
            return true
        }
    }
    return false

    
};