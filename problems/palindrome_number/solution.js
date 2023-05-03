/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function(x) {

  const xArray = Array.from(x.toString())
  
  let i = 0
  let j = xArray.length - 1

  while (i <= j) {
    if (xArray[i] !== xArray[j]) {
      return false
    } else {
      i++
      j--
    }
  }
  return true    
};