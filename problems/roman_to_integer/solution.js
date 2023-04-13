/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    let curr = roman[s[i]]
    let next = roman[s[(i + 1)]]
    if (curr === 1 && (next === 5 || next === 10)) {
      result -= curr
      continue
    }
    if (curr === 10 && (next === 50 || next === 100)) {
      result -= curr
      continue
    }
    if (curr === 100 && (next === 500 || next === 1000)) {
      result -= curr
      continue
    }
    result += curr
  }
  return result    
};