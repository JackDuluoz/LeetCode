/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(numbers, target) {
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                arr = [i + 1, j + 1]
                return arr
            }
        }
    }
};