var checkInclusion = function(s1, s2) {
  
  const getPermutations = (s, memo = {}) => {
    if (s in memo) return memo[s];
    if (s.length === 0) return []
    if (s.length === 1) return [s[0]];

    let permutations = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      const substring = `${s.slice(0, i)}${s.slice(i + 1)}`;
      memo[substring] = getPermutations(substring, memo);
      const subPermutations = memo[substring];
      for(let j = 0; j < subPermutations.length; j++) {
        const permutation = subPermutations[j];

        permutations.push(`${char}${permutation}`);
      }
    }
    return permutations;
  }
  
  const permutations = getPermutations(s1);
  
  console.log(permutations)
  for (let permutation of permutations) {
    if (s2.indexOf(permutation) >= 0) return true;
  }
  
  return false;
};

console.log(checkInclusion('prosperity', 'properties'))