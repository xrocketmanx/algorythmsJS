"use strict";
/**
 * Get matches by length and possible letters from dictionary
 * presented as trie tree. 
 * @param  {TrieTree} tree  
 * @param  {letters}  letters array of possible letters
 * @param  {Number}   length  length of searched words
 * @return {Array}            array of matches
 */
function getMatchesByLength(tree, letters, length) {
    if (letters.length < length) return [];
    letters.sort();
    return getMatchesByLengthRecursive(tree.getTreeRoot(), letters, length);
}

/**
 * Recursive algorythm
 * @param  {Object} node    root node of tree
 * @param  {Array}  letters array of possible letters
 * @param  {Number} length  length of searched words
 * @return {Array}          array of matches
 */
function getMatchesByLengthRecursive(node, letters, length) {
  if (length === 0 && node.word !== null) {
    return [node.word];
  }

  var matches = [];

  for (var i = 0; i < letters.length; i++) {
    if (letter === letters[i]) continue;
    var letter = letters[i];
    if (node[letter]) {
        var tempMatches = getMatchesByLengthRecursive(
          node[letter], 
          removeItem(letters, i), 
          length - 1);
        matches = matches.concat(tempMatches);
    }
  }

  return matches;
}

/**
 * Removes item from array without modifying array
 */
function removeItem(array, index) {
  var result =  array.slice();
  result.splice(index, 1);
  return result;
}