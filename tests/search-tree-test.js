"use strict";
var assert = chai.assert;

describe('SearchTree', function() {
	var tree = new SearchTree(function(a, b) {
		return a - b;
	});
	var itemsArray = generateRandomArray(10);

	describe('getTreeRoot', function() {
		it('should return null from empty tree', function() {
			assert.equal(tree.getTreeRoot(), null);
		});
	});

	describe('add', function() {
		it('should add ' + itemsArray[0] + ' into empty tree', function() {
			tree.add(itemsArray[0]);
			var treeRoot = tree.getTreeRoot();
			assert.equal(treeRoot.item, itemsArray[0]);
		});
		it('should add ' + itemsArray[1] + ' into tree', function() {
			tree.add(itemsArray[1]);
			var treeRoot = tree.getTreeRoot();
			if (treeRoot.left) {
				assert(treeRoot.left.item === itemsArray[1]);
			} else {
				assert(treeRoot.right.item === itemsArray[1]);
			}
		});
	});

	describe('search', function() {
		it('should find ' + itemsArray[2] + ' in the tree', function() {
			tree.add(itemsArray[2]);
			var result = tree.search(itemsArray[2]);
			assert.equal(result, itemsArray[2]);
		})

		it('should not find infinity in the tree', function() {
			var result = tree.search(Infinity);
			assert.equal(result, null);
		})
	});

	describe('remove', function() {
		it('should remove ' + itemsArray[1] + ' from tree', function() {
			for (var i = 2; i < itemsArray.length; i++) {
				tree.add(itemsArray[i]);
			}
			tree.remove(itemsArray[1]);
			var found = tree.search(itemsArray[1]);
			assert(!found);
		});
	});
});