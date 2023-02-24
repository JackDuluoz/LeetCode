// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = function(nums) {
    for (let num of nums) {
        if (num === 0) {
            nums.splice(nums.indexOf(num), 1)
            nums.push(0)
        }
    }
};

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]