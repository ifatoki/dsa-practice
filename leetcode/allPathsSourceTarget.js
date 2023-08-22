/**
 @param {number[][]} graph
 @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const start = 0;
  const finish = graph.length - 1; 
  const paths = [];
  const dfs = (node, path = []) => {
    const neighbors = graph[node];
    
    path.push(node);
    if (node === finish) {
      paths.push(path);
      return;
    }

    for (let i = 0; i < neighbors.length; i++) {
      dfs(neighbors[i], [...path]);
    }
  }
  
  dfs(start);
  return paths;
};

console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]));
console.log(allPathsSourceTarget([[1,2],[3],[3],[]]));