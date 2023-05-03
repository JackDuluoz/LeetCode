/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function(s) {
  
  const array = s.trim().split(" ")
  const lastWord = array[array.length - 1]
  return lastWord.length
  
  // let length = 0
  // let i = s.length - 1
  //   while (i >= 0 && s[i] === ' ') {
  //     i--
  //   }
  //   while (i >= 0 && s[i] !== ' ') {
  //       length++
  //       i--
  //   }
  // return length
};