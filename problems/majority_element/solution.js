/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {

  let count = {}

  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1
    } else {
      count[nums[i]]++
    }
  }

  console.log(count)

  let arr = []
  for (let key in count) {
    arr.push(count[key])
  }
  let mode = Math.max(...arr)
  console.log(mode)

  for (let key in count) {
    if (count[key] === mode) {
      return key
    }
  }


};