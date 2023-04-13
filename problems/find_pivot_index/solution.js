/**
 * @param {number[]} nums
 * @return {number}
 */

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