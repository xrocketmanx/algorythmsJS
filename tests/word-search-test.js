var assert = chai.assert;

describe('Word search by possible leters and length in trie tree dictionary' +
	' contatining("hello", "heart", "hell", "hear", "horn")', function() {
	describe('getMatchesByLength', function() {
		var tree = new TrieTree();
		tree.add('hello');
		tree.add('heart');
		tree.add('hell');
		tree.add('hear');
		tree.add('horn');
		var possibleLetters = ['h', 'l', 'e', 'a', 'l', 't', 'r', 'o'];

		it('should find "hello", "heart"(should not find "hell")' +
			' when possibleLetters (' + possibleLetters + ') and length 5', function() {
			assert.deepEqual(getMatchesByLength(tree, possibleLetters, 5), 
				['heart', 'hello']);
		});

		it('should find "hell", "hear"(should not find "horn")' +
			' when possibleLetters (' + possibleLetters + ') and length 4', function() {
			assert.deepEqual(getMatchesByLength(tree, possibleLetters, 4), 
				['hear', 'hell']);
		});
	});
});