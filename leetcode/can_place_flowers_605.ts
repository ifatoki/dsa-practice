/**
  605. Can Place Flowers
  
  You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

  Example 1:
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: true

  Example 2:
  Input: flowerbed = [1,0,0,0,1], n = 2
  Output: false
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count: number = 0;

  if (flowerbed[0] === 0) {
    if (flowerbed.length === 1) {
      return n <= 1;
    } else if (flowerbed[1] === 0) {
      flowerbed[0] = 1;
      count++
    }
  }

  for (let i: number = 1; i < flowerbed.length - 1 && count < n; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }
  
  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    flowerbed[flowerbed.length - 1] = 1;
    count ++;
  }

  return n <= count;
};