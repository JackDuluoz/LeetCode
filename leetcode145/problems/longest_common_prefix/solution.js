/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strings) {
  let result = ""
  const firstWord = strings[0]
  for (let i = 0; i < firstWord.length; i++) {
      if (strings.every((string) => string[i] === firstWord[i])) {
        result += firstWord[i]
    } else {
      break
    }
  }
  return result 
};