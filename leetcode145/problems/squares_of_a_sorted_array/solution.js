/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares = function(nums) {
    let squares = []
    for (let n of nums) {
        squares.push(n * n)
    }
    return squares.sort((a, b) => a - b) 
};