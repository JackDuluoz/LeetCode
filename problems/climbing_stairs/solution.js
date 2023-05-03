/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = function(n) {
    
if (n === 1 || n === 2) {
  return n
}

let steps = [1, 2]
let i = 3

while (i <= n) {
  steps.push(steps[steps.length - 1] + steps[steps.length - 2])
  i++
}

return steps[steps.length - 1]

};