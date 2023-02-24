// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

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

console.log(searchInsert([1, 3, 5, 6], 5))  // 2
console.log(searchInsert([1, 3, 5, 6], 2))  // 1
console.log(searchInsert([1, 3, 5, 6], 7))  // 4