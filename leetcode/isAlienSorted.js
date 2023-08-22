/**
  In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
  Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

  Example 1:
  Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  Output: true
  Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

  https://leetcode.com/problems/verifying-an-alien-dictionary/description/
*/

/**
 @param {string[]} words
 @param {string} order
 @return {boolean}
 */
var isAlienSorted = function(words, order) {
  if (words.length === 1) return true;
  const orderIndexMap = new Map();
  let prev = words[0];

  for (let i = 0; i < order.length; i++) {
    orderIndexMap.set(order[i], i);
  }

  for (let n = 1; n < words.length; n++) {
    const curr = words[n];

    if (!correctOrder(prev, curr)) return false
    prev = curr;
  }
  return true;

  function correctOrder(w1, w2) {
    if (w1 === w2) return true;
    const minLength = Math.min(w1.length, w2.length);

    for (let i = 0; i < minLength; i++) {
      const index1 = orderIndexMap.get(w1[i]);
      const index2 = orderIndexMap.get(w2[i]);

      if (index1 === index2) continue;
      return (index2 > index1);
    }

    return w2.length >= w1.length;
  }
};