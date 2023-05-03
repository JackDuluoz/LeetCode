/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const findDifference = function(nums1, nums2) {

  let output = [[], []]

  let aSet = new Set(nums1)
  let bSet = new Set(nums2)

  for (let entry of aSet) {
    if (!bSet.has(entry)) {
      output[0].push(entry)
    }
  }

  for (let entry of bSet) {
    if (!aSet.has(entry)) {
      output[1].push(entry)
    }
  }

  return output

  // let aMap = new Map()
  // let bMap = new Map()

  // nums1.sort((a, b) => a - b)
  // nums2.sort((a, b) => a - b)

  // for (let num of nums1) {
  //   if (!aMap.num) {
  //     aMap.set(num, 1)
  //   }   
  // }

  // for (let num of nums2) {
  //   if (!bMap.num) {
  //     bMap.set(num, 1)    
  //   }
  // }

  // for (let i = 0; i < nums1.length; i++) {
  //   if ((!bMap.has(nums1[i])) && (nums1[i] !== nums1[i + 1])) {
  //     output[0].push(nums1[i])
  //   }
  // }

  // for (let j = 0; j < nums2.length; j++) {
  //   if ((!aMap.has(nums2[j])) && (nums2[j] !== nums2[j + 1])) {
  //     output[1].push(nums2[j])
  //   }
  // }

};