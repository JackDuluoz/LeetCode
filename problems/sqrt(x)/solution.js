/**
 * @param {number} x
 * @return {number}
 */

// 1. Equals

// 2. In between middlePoint and middlePoint + 1

// 3. In between middlePoint and middlePoint - 1

// 4. Keep digging

const mySqrt = function(x) {

  let r = x;
  while (r * r > x) {
    r = Math.floor(((r + x/r) / 2));
  }
  return r;

  // if (x === 0 || x === 1) {
  //   return x
  // }
  // let min = 1
  // let max = x / 2
  // while (true) {
  //   const middlePoint = Math.floor((min + max) / 2)
  //   if (middlePoint ** 2 === x) {
  //     return middlePoint
  //   } else if (middlePoint ** 2 < x) {
  //     if ((middlePoint + 1) ** 2 > x) {
  //       return middlePoint
  //     }
  //     min = middlePoint + 1
  //   } else {
  //     if ((middlePoint - 1) ** 2 < x) {
  //       return middlePoint - 1
  //     }
  //     max = middlePoint - 1
  //   }  
  // }

};