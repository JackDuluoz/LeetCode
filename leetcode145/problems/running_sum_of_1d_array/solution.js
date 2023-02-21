/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = function(nums) {
    let sumArray = [nums.shift()]
    while (nums.length > 0) {
        sumArray.push(nums.shift() + sumArray[sumArray.length - 1])
    }
    return sumArray
};