/**
 * @param {number[][]} mat
 * @return {number}
 */

const diagonalSum = function(mat) {

  let total = 0
  let x = 0
  let y = mat.length - 1

  for (let i = 0; i < mat.length; i++) {
    total += mat[i][i]
    total += mat[x][y]
    x++
    y--
  }

  if (mat.length % 2 !== 0) {
    let middle = Math.floor(mat.length / 2)
    total -= mat[middle][middle]
  }

  return total
};


/*

PRIMARY DIAGONAL
create a count variable = 0

we know mat.length from input

loop through each row of mat array up to mat.length

access [i][i] in each row

increment count by [i][i]

SECONDARY DIAGONAL

declare two pointer variables x and y values of 0 and mat.length

access [x][y]

increment count by [x][y]

x++
y--

[ [1] ]

[ [1,2],
  [1,2]  ]

[ [1,1,3],
  [1,1,3],
  [1,1,3] ]

[ [1,1,1,4],
  [1,1,1,4],
  [1,1,1,4],
  [1,1,1,4] ]

[ [1,1,1,1,5],
  [1,1,1,1,5],
  [1,1,1,1,5],
  [1,1,1,1,5],
  [1,1,1,1,5] ]

[ [1,1,1,1,1,6],
  [1,1,1,1,1,6],
  [1,1,1,1,1,6],
  [1,1,1,1,1,6],
  [1,1,1,1,1,6],
  [1,1,1,1,1,6] ]
*/