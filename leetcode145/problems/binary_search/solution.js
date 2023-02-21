/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    while (true) {
        const middleIndex = Math.floor((min + max)/2);
        const currentItem = nums[middleIndex];

        if (currentItem === target) {
          return middleIndex;
        } else if (currentItem < target) {
          min = middleIndex + 1;
        } else {
          max = middleIndex - 1;
        }
        if (min > max) {
            return -1;
        }
    }
};