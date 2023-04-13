/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

const nearestValidPoint = function(x, y, points) {

  let arr = points.filter(coord => coord[0] === x || coord[1] === y) 
  console.log(arr)

  if (arr.length === 0) {
    return -1
  }
  if (arr.length === 1) {
    return points.indexOf(arr[0])
  }

  let mapD = arr.map((index) => Math.abs((index[0] - x) + (index[1] - y))) 
  let nearest = Math.min(...mapD)

  let mapS = arr
    .filter((index) => Math.abs((index[0] - x) + (index[1] - y)) === nearest)
    .map((index) => index[0] + index[1])
  let smallest = Math.min(...mapS)

  for (let a of arr) {
    if ((Math.abs((a[0] - x) + (a[1] - y)) === nearest) && ((a[0] + a[1]) === smallest)) {
    console.log(a)
    return points.indexOf(a)
    }
  }
};