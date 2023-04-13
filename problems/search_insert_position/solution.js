/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function(nums, target) {
    let min = 0
    let max = nums.length - 1
    while (true) {
        const middleIndex = Math.floor((min + max) / 2)
        const currentItem = nums[middleIndex]
        if (currentItem === target) {
            return middleIndex
        } else if (currentItem < target) {
            min = middleIndex + 1
        } else {
            max = middleIndex - 1
        }
        if (min > max) {
            if (target > Math.max(...nums)) {
                return nums.length
            } else if (target < Math.min(...nums)) {
                return 0
            } else {
                return min
            }
        }
    }
};