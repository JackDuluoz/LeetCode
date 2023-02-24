// Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

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

console.log(search([-1,0,3,5,9,12], 9)) // 4
console.log(search([-1,0,3,5,9,12], 2)) // -1