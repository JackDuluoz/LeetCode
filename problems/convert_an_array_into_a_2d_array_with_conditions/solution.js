/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const findMatrix = function(nums) {
  let dictionary = {}
  let output = []
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    !Object.hasOwn(dictionary, currentNumber) ? dictionary[currentNumber] = 0 : dictionary[currentNumber] += 1
    const entryValue = dictionary[currentNumber] 
    output[entryValue] ? output[entryValue].push(currentNumber) : output[entryValue] = [currentNumber]
  }
  return output
};