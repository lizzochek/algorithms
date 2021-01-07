//Отсортировать массив: сначала четные числа в порядке возрастания, потом нечетные в порядке убывания

const A = [7,6,5,4,3,2,1];
const B = [1,2,3,4,5,6,7];
const C = [1,1,2,3,3,5,7,2];
//const C = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41]; 
//console.log(A);

const oddNumbers = [];
const evenNumbers = [];

function divide(arr) {
  for(let i = 0; i < arr.length; i++) {
	if(arr[i] % 2 === 0) evenNumbers.push(arr[i]);
    else oddNumbers.push(arr[i]);	
  }
};
 
//divide(A);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}	
	
const sortedEven = insertionSort(evenNumbers);
const sortedOdd = insertionSort(oddNumbers).reverse();

const sortedA = sortedEven.concat(sortedOdd);
//console.log(sortedA);

function MergeSort(A) {
	let L = A.slice(0, Math.floor(A.length/2));
	let R = A.slice(Math.floor(A.length/2), A.length + 1);
	 let n1 = L.length;
     let n2 = R.length;
     L.push(Infinity);
     R.push(Infinity);
	 insertionSort(L);
	 insertionSort(R);
     let i = 0;
     let j = 0;
	 let count  = 0;
     for(let k = 0; k < (n1 + n2); k++) {
	     if(L[i] <= R[j]) {
	        A[k] = L[i];
			i++;
	        } else {
				A[k] = R[j];
				if(L[i] != Infinity) count++;
				j++;
			}
		} return console.log(`Array ${A}, count ${count}`);
 };

console.log(`Initial array ${A}`);
MergeSort(A);
console.log(`Initial array ${B}`);
MergeSort(B);
console.log(`Initial array ${C}`);
MergeSort(C);
 
 