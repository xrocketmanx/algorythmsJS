"use strict";
/**
 * @class
 * Realization of trie tree based on
 * hash table.
 */
function TrieTree() {
	function Node(word) {
		this.word = word;
	}
	var treeRoot = new Node('');

	/**
	 * Returns tree root
	 * @return {Node}
	 */
	this.getTreeRoot = function() {
		return treeRoot;
	};

	/**
	 * Adds word to the tree
	 * @param {String} word
	 */
	this.add = function(word) {
		var temp = treeRoot;
		for (var i = 0; i < word.length; i++) {
			var letter = word.charAt(i);
			if (temp[letter]) {
				if (i === word.length - 1) {
					temp[letter].word = word;
				} else {
					temp = temp[letter];
				}
			} else {
				if (i === word.length - 1) {
					temp[letter] = new Node(word);
				} else {
					var node = new Node(null);
					temp[letter] = node;
					temp = node;
				}
			}
		}
	};
}