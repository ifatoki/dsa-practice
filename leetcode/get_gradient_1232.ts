/**
  1232. Check If It Is a Straight Line
  
  You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

  Example 1:
  Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
  Output: true
*/

function checkStraightLine(coordinates: number[][]): boolean {
  const gradient = getGradient(coordinates[0], coordinates[1]);

  for (let i: number = 2; i < coordinates.length; i++) {
    if (gradient !== getGradient(coordinates[i - 1], coordinates[i])) {
      return false;
    }
  }

  return true;

  function getGradient(p1: number[], p2: number[]): number {
    const [x1, y1] = p1
    const [x2, y2] = p2

    if (y2 > y1) return (y2 - y1) / (x2 - x1);
    return (y1 - y2) / (x1 - x2);
  }
};

// Time: O(n)
// Space: 1