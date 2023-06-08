/**
 * @param {number[][]} grid
 * @return {number}
 */

const countNegatives = function(grid) {
  let steps = 0
  let negatives = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      steps ++
      let currentElement = grid[i][j]
      let nextElement = grid[i][j-1]
      if (currentElement < 0) {
        negatives ++
      }
      if (nextElement >= 0) {
        break
      }
    }
  }
  console.log(steps)
  return negatives        
};