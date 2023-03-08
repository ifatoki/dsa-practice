var validPath = function(n, edges, source, destination) {
  const map = new Map();
  const dfs = (node, seen = new Set()) => {
    const neighbors = map.get(node) || [];
    
    if (node === destination) return true;
    if (!seen.has(node)) {
      seen.add(node);
      for (let i = 0; i < neighbors.length; i++) {
        if (dfs(neighbors[i], seen)) return true;
      }
    }
    return false;
  }
  
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    const aNeighbors = map.get(a) || [];
    const bNeighbors = map.get(b) || [];
    
    map.set(a, [...aNeighbors, b]);
    map.set(b, [...bNeighbors, a]);
  }
  
  return dfs(source);
};

console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2));