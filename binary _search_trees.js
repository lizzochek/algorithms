//Binary search trees

const tree = {
	value: 43,
	left: {
		value: 15,
		left: {
			value: 34,
			left: {
				value: 12,
				left: null,
				right: null
			},
			right: {
				value: 23,
				left: null,
				right: null
			}
		},
		right: {
			value: 78,
			left: {
				value: 52,
				left: null,
				right: null
			},
			right: {
				value: 25,
				left: null,
				right: null
			}
		}
	},
	right: {
		value: 36,
		left: {
			value: 51,
			left: {
				value: 74,
				left: null,
				right: null
			},
			right: {
				value: 66,
				left: null,
				right: null
			}
		},
		right: {
			value: 12,
			left: {
				value: 53,
				left: null,
				right: null
			},
			right: {
				value: 37,
				left: null,
				right: null
			}
		}
	}
};

const sum = 94;
console.log(`Input tree: `);
console.dir(tree);


function makeArray(tree) {
	const arr = [];
	
	function add(branch = tree) {
		arr.push(branch.value);
		if(branch.left) add(branch.left);
		if(branch.right) add(branch.right);
	}
	add();
	arr.sort();
	return arr;
}

const findRoot = (arr) => Math.floor(arr.length/2);

class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
	
	add(val) {
		if(this.value >= val) {
			if(this.left == null) {
				this.left = new Node(val);
			} else {
				this.left.add(val);
			}
		} else {
			if(this.right == null) {
				this.right = new Node(val);
			} else {
				this.right.add(val);
			}
		}
	}

	findRoutes(S, route = []) {
		let amount = 0;
		if(this.left) {
			
		}
	}
}

function makeSortTree(tree) {
	const oldTree = tree;
	const arr = makeArray(tree);

	let root = arr[Math.floor(arr.length/2)];
	const newTree = new Node(root);

	for(let i = 0; i < arr.length; i++) {
		if(i != arr.indexOf(root)) {
			newTree.add(arr[i]);
		}
	}

	return newTree;
}

const newTree = makeSortTree(tree);
console.log(`Final tree: `);
console.log(newTree);


function findSum(tree, sum = 100) {
	let cache = [];

}

findSum(newTree);

