// Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to
// the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
// This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1. 

// Example 1:
// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Example 2:
// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Example 3:
// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

const pivotIndex = function(nums) {
    let pivotIndex = -1
    const keys = nums.keys()
    for (const key of keys) {
        const before = nums.slice(0, key)
        const after = nums.slice(key + 1)
        let beforeSum = 0
        for (let b of before) {
            beforeSum += b
        }
        let afterSum = 0
        for (let a of after) {
            afterSum += a
        }
        if (beforeSum === afterSum) {
            pivotIndex = key
            return pivotIndex
        }
    }
    return pivotIndex
};

console.log(pivotIndex([1,7,3,6,5,6]))  // 3
console.log(pivotIndex([1,2,3]))        // -1
console.log(pivotIndex([2,1,-1]))       // 0