// Вхоящие данные: Матрица D натуральных чисел размерности UхM, где U — эти количество пользователей, M — количество фильмов. 
// Каждый элемент матрицы D[i, j] указывает на позицию фильма j в списке предпочтений пользователя i. 
// Другим входным элементом является X — номер пользователя, с которым будут сравниваться номера всех других пользователей.

//Исходящие данные: Список из упорядоченных по возрастанию второго элемента пар (i, c), где i — номер пользователя,
// c — число, которое указывает на степень сходства предпочтений пользователей x и c (количество инверсий).
 
 const D = [
     [2, 4, 3, 1],
	 [1, 5, 7, 9],
	 [2, 4, 1, 7],
	 [1, 11, 9, 3],
	 ];
	 
 function countInv(matrix, x) {
     for(let m = 0; m < matrix.length; m++) {
		 let count = MergeAndCountSplitInversions(matrix[x], matrix[m]);
		 let inversions = [m, count];
	     console.log(`(${inversions})`);	
	}
 }

countInv(D, 0);

function MergeAndCountSplitInversions(L, R) {
	 let A = [];
	 let n1 = L.length;
     let n2 = R.length;
     L[n1+1] = Infinity;
     R[n2+1] = Infinity;
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
 };
 
 