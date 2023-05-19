/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = function(haystack, needle) {
  let output = -1
  for (let h = 0; h < haystack.length; h++) {
    if (output !== -1) {
      return output
    }
    output = h
    for (let n = 0; n < needle.length; n++) {
      if (needle[n] !== haystack[h + n]) {
        output = -1
      }
    }
  }
  return output
};