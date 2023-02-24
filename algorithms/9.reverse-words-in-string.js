// Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while
// still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

const reverseWords = function(s) {
  let result = ''
  let arr = s.split(' ')
  for (let word of arr) {
    result += word.split('').reverse().join('') + " "
  }
  return result.trim()
};

console.log(reverseWords("Let's take LeetCode contest"))    // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding"))                       // "doG gniD"
