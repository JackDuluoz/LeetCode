/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function(nums1, m, nums2, n) {
    let p = n
     while (p > 0) {
      nums1.pop()
      p--
    }
    while (n > 0) {
      nums1.push(nums2.shift())
      n--
    }
    nums1.sort((a, b) => a - b)
};