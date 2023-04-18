/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const cache = new Map()
  let num = n
  while (true) {
    let numString = num.toString()
    let numArray = Array.from(numString)
    num = numArray.reduce((acc, curr) => acc + Number(curr) ** 2, 0)
    if (cache.has(num)) {
      return false
    }
    if (num === 1) {
      return true
    } else {
      cache.set(num, num)
    }
  }
};