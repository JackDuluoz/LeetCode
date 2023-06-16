/**
 * @param {number[]} height
 * @return {number}
 */

const checkArea = (value1,value2,distance) => {
  let smallestValue = value1 < value2 ? value1 : value2;
  return smallestValue * distance;
}

const maxArea = (height) => {
  let p1 = 0;
  let p2 = height.length - 1;
  let maxArea = checkArea(height[p1], height[p2], height.length - 1);
  while (p1 < p2) {
    const currentArea = checkArea(height[p1], height[p2], (p2 - p1));
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    height[p1] <= height[p2] ? p1++ : p2--;
  }
  return maxArea; 
};