/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  // nums.sort()
  // let i = 0
  // while (i < nums.length) {
  //   if (nums[i] === nums[i + 1]) {
  //     i += 2
  //   } else {
  //     return nums[i]
  //   }
  // }

  let count = {}

  for (let i = 0; i < nums.length; i ++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1
    } else {
      count[nums[i]]++
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      return key
    }
  }

};