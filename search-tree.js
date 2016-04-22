"use strict";
/**
 * @class
 * Search tree realization without recursion.
 * Contains nodes with item, left, right fields.
 * @param {Function} comparator must compare two items
 */
function SearchTree(comparator) {
	function Node(item) {
		this.item = item;
		this.left = null;
		this.right = null;
	}
	var treeRoot = null;

	/**
	 * Gets root of the tree
	 * Use for tests only
	 * @return {Node} tree root
	 */
	this.getTreeRoot = function() {
		return treeRoot;
	};

	/**
	 * Adds item into the tree
	 * @param {Object} item any item
	 */
	this.add = function(item) {
		var node = new Node(item);

		if (treeRoot) {
			var current = treeRoot;
			while(current) {
				var compareResult = comparator(item, current.item);
				if (compareResult === 0) {
					return;
				} else if (compareResult > 0) {
					if (current.right) {
						current = current.right;
					} else {
						current.right = node;
						return;
					}
				} else {
					if (current.left) {
						current = current.left;
					} else {
						current.left = node;
						return;
					}
				}
			}
		} else {
			treeRoot = node;
		}
	};

	/**
	 * Removes item from the tree
	 * @param  {Object} item to remove
	 */
	this.remove = function(item) {
		var prev = null;
		var current = treeRoot;
		var found = false;

		while (current) {
			var compareResult = comparator(item, current.item);
			if (compareResult === 0) {
				found = true;
				break;
			} else if (compareResult > 0) {
				prev = current;
				current = current.right;
			} else {
				prev = current;
				current = current.left;
			}
		}

		if (found) {
			var replacer = null; 
			if (current.left && current.right) {
				replacer = min(current.right);
				this.remove(replacer.item);
				replacer.right = current.right;
				replacer.left = current.left;
			} else if (current.left) {
				replacer = current.left;
			} else {
				replacer = current.right;
			}

			if (prev) {
				var compareResult = comparator(item, prev.item);
				if (compareResult > 0) {
					prev.right = replacer;
				} else {
					prev.left = replacer;
				}
			} else {
				treeRoot = replacer;
			}
		}
	};

	function min(node) {
		while (node.left) {
			node = node.left;
		}
		return node;
	}

	/**
	 * Searches for item in the tree
	 * @param  {Object} value to compare with
	 * @return {Object} 	  item or null if search failed
	 */
	this.search = function(value) {
		var current = treeRoot;
		while (current) {
			var compareResult = comparator(value, current.item);
			if (compareResult === 0) {
				return current.item;
			} else if (compareResult > 0) {
				current = current.right;
			} else {
				current = current.left;
			}
		}
		return null;
	};
}