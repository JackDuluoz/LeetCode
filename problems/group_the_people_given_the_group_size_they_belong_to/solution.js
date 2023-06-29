/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

const groupThePeople = function(groupSizes) {
  let dictionary = {}
  let output = []
  for (let i = 0; i < groupSizes.length; i++) {
    const group = groupSizes[i]
    if (!dictionary[group]) {
      dictionary[group] = [i]
    } else {
      if (dictionary[group].length < group) {
        dictionary[group].push(i)
      } else {
        output.push(dictionary[group])
        dictionary[group] = [i]
      }
    }
  }
  for (entry in dictionary) {
    output.push(dictionary[entry])
  }
  return output
};