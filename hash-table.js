//Hash tables


//Defining an array

const arr = [85,93,60,52,72,76,58,38,83,58,64,20,2,41,31,41,1,70,
	67,19,12,36,48,87,47,51,37,30,12,18,23,29,74,22,93,56,67,56,90,96,63,47,24,6,50,13,28,74,13,4,14,82,82,1,1,47,8,37,92,97,86,

	66,25,9,5,97,41,44,72,48,6,3,65,61,42,37,99,80,72,16,56,87,97,34,26,8,2,98,99,38,7,33,82,24,94,89,99,69,56,35,1,2,95,91,65,62,
	54,54,85,8,59,7,31,4,4,82,99,81,69,26,18,24,26,23,98,9,66,7,55,65,0,41,86,97,91,57,3,14,60,66,8,16,37,35,60,50,73,2,90,35,92,80,
	60,91,77,40,26,33,17,48,70,75,71,52,62,75,86,37,28,85,30,51,22,27,4,14,70,70,33,50,13,18,66,75,44,64,70,49,8,35,68,46,9,55,95,40,76,17,85,34];
let sum = 140;
let length = 200;

/*
for(let i = 0; i < length; i++) {
	let a = Math.floor( Math.random() * 100 );
	arr.push(a);
}
*/
console.log(`Исходный массив: ${arr}`);

//Hash functions

const h1 = key => key % length;
const h2 = (key, m, A) => m* ( (key * A) - Math.floor(key * A));
const h3 = key => key;

function h(key, j) {
	let finalKey = h1(key) + j * h3(key);
	let final = finalKey % 7;
	return final;
}

//Search functions 

console.log('Метод умножения');
console.log('Линейное пробирование');


//Multiplication method
function LinearProbingSearch(A, S) {
	const HashTable1 = Array(length);
	let collisions = 0;
	let keys = [];
	let countTime = 0;
	let isFoundIndex = -1;
	let addition = 0;

	//Перебираем массив
	for (let i = 0; i < A.length; i++) {
		// Определяем дополнение, которое должно быть положительным
		addition = S - A[i];
		if (addition > 0) {

			// Получаем положительный ключ
			let key = Math.abs(h1(addition));

			//Вычисляем наличие коллизии
			if (keys.includes(key)) {
				collisions++;

				//Linear probing
				for (let i = 1; i < keys.length; i++) {
					countTime++;
					if (!keys.includes(key + 1)) {
						key = key++;
					}
				}
			}
			keys.push(key);

			//Определяем, есть ли нужные два числа
			if (HashTable1[key] === addition) {
				isFoundIndex = i;
				break;
			} else {
				HashTable1[key] = A[i];
			}

		}
	}
	if (isFoundIndex > 0) {
		console.log(`Элементы дающие сумму ${S}: (${A[isFoundIndex]}; ${addition})`);		
	} else {
		console.log('Числа дающие данную сумму не найдены');		
	}
	
	console.log(`Количество коллизий: ${collisions}, количество итераций для разрешения коллиций: ${countTime}`);
}
const start= new Date().getTime();
LinearProbingSearch(arr, sum);
const end = new Date().getTime();
console.log(`Время выполнения линейного пробирования : ${end - start} ms`);


console.log('Метод деления');
console.log('Квадратическое пробирование');

//Division method
function SquareProbingSearch(A, S) {
	const HashTable2 = Array(length);
	let collisions = 0;
	let keys = [];
	let countTime = 0;
	//Перебираем массив
	for(let i = 0; i < A.length; i++) {

		// Определяем дополнение, которое должно быть положительным
		let addition = S-A[i];
		if(addition > 0) {

		// Получаем положительный ключ
		let key = Math.abs(h2(addition, 3, 0.62));

		//Вычисляем наличие коллизии
		if(keys.includes(key)) { 
			collisions++;

			//Square probing
			for(let i = 1; i < keys.length; i++) {
				countTime++;
				if(!keys.includes(key + i + i * i * 3)) {
					key = key + i + i * i * 3;
				} break;
			}
		}

		keys.push(key);

		//Определяем, есть ли нужные два числа
		if(HashTable2[key] === addition) {
			console.log(`Элементы дающие сумму ${S}: (${A[i]}; ${addition})`);
			break;
		} else if(i === A.length - 1) {
			console.log('Числа дающие данную сумму не найдены');
		} else {
			HashTable2[key] = A[i];
			}
		}
	} console.log(`Количество коллизий: ${collisions}, итерации для разрешения коллизий: ${countTime}`);
}


const start1= new Date().getTime();
SquareProbingSearch(arr, sum);
const end1 = new Date().getTime();
console.log(`Время выполнения квадратного пробирования : ${end1 - start1} ms`);

console.log('Двойное хеширование');

function DoubleHashingSearch(A, S) {
	const HashTable21 = Array(length);
	let collisions = 0;
	let keys = [];
	let countTime = 0;
	let startTime = new Date().getTime();
	let endTime;
	//Перебираем массив
	for(let i = 0; i < A.length; i++) {

		// Определяем дополнение, которое должно быть положительным
		let addition = S-A[i];
		if(addition > 0) {

		// Получаем положительный ключ
		let key = Math.abs(h2(addition, 3, 0.62));

		//Вычисляем наличие коллизии
		if(keys.includes(key)) { 
			collisions++;
			countTime++;
			//Double hashing
			key = h(key, 3);
		}
			keys.push(key);

		//Определяем, есть ли нужные два числа
		if(HashTable21[key] === addition) {
			console.log(`Элементы дающие сумму ${S}: (${A[i]}; ${addition})`);
			break;
		} else {
			HashTable21[key] = A[i];
			}
		if(i === A.length - 1) {
			console.log('Числа дающие данную сумму не найдены');
			}
		}
	} 
	console.log(`Количество коллизий: ${collisions}, количество итераций для разрешения коллизий: ${countTime}`);
	endTime = new Date().getTime();
	console.timeStamp();
	console.log(`Start time: ${startTime}, end time: ${endTime}`);
}
const start2 = new Date().getTime();
DoubleHashingSearch(arr,sum);
const end2 = new Date().getTime();



console.log('Метод цепочек');

//Chaining method
function ChaningSearch(A, S) {
	const HashTable3 = Array(length);
	let collisions = 0;
	let keys = [];
	let countTime = 0;
	//Перебираем массив
label:	for(let i = 0; i < A.length; i++) { 
		
		// Определяем текущий элемент и дополнение, которое должно быть положительным
		let addition = S-A[i];
		let currentElement = A[i];
		if(addition > 0) {

		// Получаем положительный ключ
		let key = Math.abs(h3(addition));

		//Вычисляем наличие коллизии
		if(keys.includes(key)) {
			let existingElement = HashTable3[key];

			//Складываем элементы по одному ключу в один массив
			HashTable3[key] = [];
			HashTable3[key].push(existingElement);
			HashTable3[key].push(currentElement);
			collisions++;

			//Перебираем элементы по ключу и ищем дополнение
			for(let j = 0; j < HashTable3[key].length; j++) {
				countTime++;
				if(HashTable3[key][j] === addition) {
					console.log(`Элементы дающие сумму ${S}: (${A[i]}; ${addition})`);
					break label;
				}
			}
		}
		//Добавляем ключ в список ключей
		keys.push(key);
				
		//Ищем в хеш-таблице дополнение
		if(HashTable3[key] === addition) {
			console.log(`Элементы дающие сумму ${S}: (${A[i]}; ${addition})`);
			break;
		} else HashTable3[key] = A[i];
				
		//Если массив пройден:ʼ	
		if(i === A.length - 1) {
			console.log('Числа дающие данную сумму не найдены');
			}
		}
 	} console.log(`Количество коллизий: ${collisions}, количество итераций для разрешения коллизий: ${countTime}`);
}

const start3= new Date().getTime();
ChaningSearch(arr, sum);
const end3 = new Date().getTime();
console.log(`Время выполнения двойного хеширования : ${end3 - start3} ms`);

