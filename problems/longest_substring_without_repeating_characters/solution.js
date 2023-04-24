/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {

  // let i = 0;
  // let placeholder = 0;
  // let dictionary = {};
  // let counter = 0;
  // let maxLength = 0;
  // while (i < s.length) {
  //   if (!dictionary[s.at(i)]) {
  //     dictionary[s.at(i)] = s.at(i);
  //     counter ++;
  //     if (counter > maxLength) {
  //       maxLength ++;
  //     };
  //   i++;
  //   } else {
  //     placeholder ++;
  //     i = placeholder;
  //     counter = 0;
  //     dictionary = {};
  //   };
  // };
  // return maxLength;

  let i = 0;
  let longestLength = 0;
  let window = [];
  while (i < s.length) {
      let currentChar = s.at(i);
      if (!window.includes(currentChar)) {
          window.push(currentChar);
          if (window.length > longestLength) {
              longestLength = window.length;
          };
          i++;
      }
      else {
          window.splice(0,(window.indexOf(currentChar) + 1));
          window.push(currentChar);
          i++;
      }
  }
  return longestLength;

};