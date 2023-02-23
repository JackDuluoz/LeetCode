// Running Sum of 1d Array

// Given an array nums we define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums. 

// Example:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = function(nums) {
    let sumArray = [nums.shift()]
    while (nums.length > 0) {
        sumArray.push(nums.shift() + sumArray[sumArray.length - 1])
    }
    return sumArray
};

console.log(runningSum([1,2,3,4]))    // [1,3,6,10]
console.log(runningSum([1,1,1,1,1]))  // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]