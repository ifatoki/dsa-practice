const arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
]

const bfs = cell => {
  const queue = [cell];
  const visited = new Map();

  visited.set(`${cell}`, true);
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    console.log(arr[x][y]);
    for (let i = x - 1; i <= x + 1; i+=2) {
      if (i > 0 && i < arr.length && !visited.has(`${[i, y]}`)) {
        queue.push([i, y]);
        visited.set(`${[i, y]}`, true);
      }
    }
    for (let j = y - 1; j <= y + 1; j+=2) {
      if (j > 0 && j < arr[0].length && !visited.has(`${[x, j]}`)) {
        queue.push([x, j]);
        visited.set(`${[x, j]}`, true);
      }
    }
  }
}
console.log(bfs([0, 0]));