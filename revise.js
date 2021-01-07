//Revision of algorithms

//Insertion sort

const A = [12, 4, 0, 11]

function insertionSort(arr) {
	for(let j = 0; j < arr.length; j++) {
		let key = arr[j];
		let i = j - 1;
		while(i >= 0 && arr[i] > key) {
			arr[i+1] = arr[i];
			i--;
		}
		arr[i+1] = key;
	}
	return console.log(arr);
}

insertionSort(A);

//Merge sort

function MergeAndCountSplitInv(L, R) {
	let A = [];
	let n1 = L.length;
	let n2 = R.length;
	L[n1+1] = Infinity;
	L[n2+1] = Infinity;
	let i = 0;
	let j = 0;
	let count = 0;
	for(let k = 0; k < (n1 + n2); k++) {
		if(L[i] <= R[j]) {
			A.push(L[i]);
			i++;
		} else {
			A.push(R[j]);
			j++;
			count++;
		}
	} return count;
}

function countInv(matrix, x = 0) {
	for(let i = 0; i < matrix.length; i++) {
		let counter = MergeAndCountSplitInv(matrix[x], matrix[i]);
		let inversions = [i, counter];
		console.log(`(${inversions})`);
	}
}

const D = [
     [2, 4, 3, 1],
	 [1, 5, 7, 9],
	 [2, 4, 1, 7],
	 [1, 11, 9, 3],
	 ];
	 
countInv(D);	 


