/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = function(s) {
  let result = ''
  let arr = s.split(' ')
  for (let word of arr) {
    result += word.split('').reverse().join('') + " "
  }
  return result.trim()
};