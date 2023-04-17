/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function(numRows) {    
  let output = []
  for (let i = 0; i < numRows; i++){
    let row = [];
    for (let j = 0; j <= i; j++){
      if (j === 0 || j === i){
        row.push(1);
      } else {
        row.push(output[i - 1][j - 1] + output[i - 1][j])
      }
    }
      output.push(row)
  }
  return output
};