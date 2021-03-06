
/* Задача 1

//Имеется массив флагов изменения версий продуктов number[][], в котором каждый элемент является массивом, содержащим следующие значения: id продукта, флаг изменения мажорной версии, флаг изменения минорной версии, флаг изменения патча. 
Например, запись продукта #12 без изменения - [12, 0, 0, 0], с изменением минорной и патча - [12, 0, 1, 1], с изменением только мажорной - [12, 1, 0, 0]. 
Необходимо написать код сортировки массива по "силе" изменения версии продуктов, где самые сильные вначале массива. Например, [12, 1, 0, 0] будет сильнее, чем [12, 0, 1, 1], но слабее, чем [12, 1, 0, 1] 
Пример массива:

// Ответ:
*/
let products = [
    [11, 0, 1, 0],
    [8, 1, 0, 0],
 		[12, 1, 1, 0], 
    [12, 0, 1, 1],  
    [12, 1, 0, 2],
    [9, 1, 0, 1],
    [3, 0, 1, 1],
    [15, 0, 0, 1],
];

const minorize = (products, isItMultiple) =>{
for(var i = 0; i < products.length; i++){
    for(var j = 0; j < products[i].length; j++){
      if (!(products[i][j] === 0)) {
        operatedIndex = products[i].length-j;
        products[i][j] = isItMultiple ? products[i][j] * operatedIndex : products[i][j] / operatedIndex;
      }
    }
}

} 
const newSortAlgoritm = () =>{
minorize(products,true); 
products.sort(function compareNumeric(a, b) {
   if (a > b) return -1;
  if (a < b) return 1;
});
minorize(products,false);
console.log(products)
}

newSortAlgoritm(); 

/* Задача 2

//Напишите, пожалуйста, функцию, которая принимает строку, и превращает ее в хэштег: 
- строка должна начинаться с символа #; 
- каждое слово должно начинаться с прописной буквы, все остальные буквы строчные; 
- функция должна возвращать false, если длина хэштега превышает 100 символов или равна 0; 
- хэштег может содержать только буквы, цифры и символ #. 

 Ответ:
*/
const getHashTag = inputText => {

let convertedText = `#${inputText.toLowerCase().replace(/[^a-zа-я0-9 ]/g, '').replace(/(^|\s)\S/g, l => l.toUpperCase()).replace(/ /g, '')}`;

if (convertedText.length == 0 || convertedText.length > 100) {
return false;
}
  
 return convertedText;
  
}

let res = getHashTag('wor d  "inPut s');
console.log(res); // #ПримерНовогоХэштега

/* Задача 3

Реализуйте, пожалуйста, ES6 класс таким образом, чтобы выполнялось следующее условие:

class Base ....

if (Base.x + Base.x === 3 && (new Base().x) === Base.x + Base.x) {
    console.log('Nice!');
}

Ответ:
*/
class Base {
  constructor() {
    this.x = 3;
  }
  static get x() {
    return 1.5;
  }
}

if (Base.x + Base.x === 3 && (new Base().x) === Base.x + Base.x) {
    console.log('Nice!');
}

/* Задача 4

//Необходимо реализовать функцию Caesar для кода ниже, которая будет применять шифр Цезаря с указанным ключом (сдвигом) для указанной строки. Алфивит - 256 символов.

// Ответ:
*/
function Caesar(amountOfShift) {
  let amountOfShiftCaesar = amountOfShift;
// Простой вариант. Не учитывается выхода сдвига за 256 символов.
  return function(strForEncription) { 
  let out = '';
	for (let i=0; i< strForEncription.length; i++){
		let code = strForEncription.charCodeAt(i);
		code = code + amountOfShiftCaesar;
		out += String.fromCharCode(code);
	}
   return out;
  };
}


let enc = Caesar(3);
enc('ABC');             // DEF
enc('hello');           // khoor
Caesar(10)('script');   // }m|sz~


/* Задача 5

//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

// Ответ:
*/

 var obj = {
  }
 
 function addClass(obj, cls) {
    var splited = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < splited.length; i++) {
      if (splited[i] == cls) return;
    }
    splited.push(cls);
    obj.className = splited.join(' ');

  }
 
 addClass(obj, 'new'); // obj.className='new'
 addClass(obj, 'open'); // obj.className='new open'
 addClass(obj, 'open'); // obj.className='new open'
 addClass(obj, 'me'); // obj.className='new open me'

/* Задача 6

Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.

// Ответ:
*/

function camelize(str) {
	var arr = str.split('-');
	str = arr[0];
	for (var i = 1; i < arr.length; i++) {
		str = str + arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return str;

}

camelize("background-color") // 'backgroundColor';
camelize("list-style-image") // 'listStyleImage';
camelize("-webkit-transition") //'WebkitTransition';

/* Задача 7
Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.
Желательно получить решение, работающее за линейное время и при этом проходящее по входному массиву только один раз.

Формат ввода
Первая строка входного файла содержит одно число n, n ≤ 10000. Каждая из следующих n строк содержит ровно одно число — очередной элемент массива.

Формат вывода
Выходной файл должен содержать единственное число — длину самой длинной последовательности единиц во входном массиве.

// Ответ:
*/

const fsread = require("fs");
fsread.readFile('input.txt', 'utf8', 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                arr = data.split('\n'); 
              // ++ insert your code here.
            	
  		  	let accumulator = 0;
    			let max = 0;
		
    		for(let i=1; i<arr.length; i++){
    				
                if (arr[i] == 1){
        		accumulator = accumulator + 1;
       			max = Math.max(max,accumulator);
       		} else {
         		accumulator = 0;
                    }
 		}
    		 // --insert your code here.
  			const fswrite = require('fs');
			fswrite.writeFile('output.txt', max.toString());           
});

/* Задача 8
Даны две строки, состоящие из строчных латинских букв. Требуется определить, являются ли эти строки анаграммами, т. е. отличаются ли они только порядком следования символов.

Формат ввода
Входной файл содержит две строки строчных латинских символов, каждая не длиннее 100 000 символов. Строки разделяются символом перевода строки.

Формат вывода
Выходной файл должен содержать единицу, если строки являются анаграммами, и ноль в противном случае.

// Ответ:
*/

const fsread = require("fs");
 
fsread.readFile('input.txt', 'utf8', 
            function(error,data){
                
       		arr = data.split('\n');
		
   		stringy1 = arr[0].split('').sort().join('');
   		stringy2 = arr[1].split('').sort().join('');

		let result = "0";
		if(stringy1 == stringy2){
			result = "1";
		}
  		const fswrite = require('fs');
		fswrite.writeFile('output.txt', result);
            
});

/* Задача 9
Дано целое число n. Требуется вывести все правильные скобочные последовательности длины 2 ⋅ n, упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
В задаче используются только круглые скобки.
Желательно получить решение, которое работает за время, пропорциональное общему количеству правильных скобочных последовательностей в ответе, и при этом использует объём памяти, пропорциональный n.

Формат ввода
Единственная строка входного файла содержит целое число n, 0 ≤ n ≤ 11

Формат вывода
Выходной файл содержит сгенерированные правильные скобочные последовательности, упорядоченные лексикографически.

// Ответ:
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
rl.on('line', (input) => {
	let  mygenerate  = (current, openbr, closed, n) => {
     	if (openbr == n && closed == n){
		process.stdout.write(current+'\n');
		} else{
			if (openbr < n) mygenerate(current + '(', openbr+1, closed, n);
			if (closed<openbr) mygenerate(current + ')', openbr, closed+1, n);
		}
	}
	mygenerate('', 0, 0, +input);	
});

/* Задача 10
Даны k отсортированных в порядке неубывания массивов неотрицательных целых чисел, каждое из которых не превосходит 100. Требуется построить результат их слияния: отсортированный в порядке неубывания массив, содержащий все элементы исходных k массивов.
Длина каждого массива не превосходит 10 ⋅ k.
Постарайтесь, чтобы решение работало за время k ⋅ log(k) ⋅ n, если считать, что входные массивы имеют длину n.

Формат ввода
Первая строка входного файла содержит единственное число k, k ≤ 1024.
Каждая из следующих k строк описывает по одному массиву. Первое число каждой строки равняется длине соответствующего массива, оставшиеся числа этой строки описывают значения элементов этого же массива. Элементы массивов являются неотрицательными целыми числами и не превосходят 100.

Формат вывода
Выходной файл должен содержать отсортированный в порядке неубывания массив, содержащий все элементы исходных массивов.
// Ответ:
*/
const fsread = require("fs");
 

fsread.readFile('input.txt', 'utf8', 
            function(error,data){
                if(error) throw error; // если возникла ошибка
           	  	let arr = data.split('\n'); 
			arr.shift();
			for(let i=0; i<arr.length; i++){
				arr[i] = arr[i].slice(2);
			}
	
			arr = arr.join(' ').split(/\s/);
			
			arr.sort(function compareNumeric(a, b) {
   			return +a - +b;
			});

  			const fswrite = require('fs');
			fswrite.writeFile('output.txt', arr.join(' '));
            
});

/* Задача 11
// Сумма чисел массива (вложенные массивы и представление числа).
// ([1, 2, '3x']) => 6
// ([1, 2, 'x3']) => 3
// ([1, [1, 2], 2]) => 6
// ([1, [1, [1, 2]], 2,]) => 7
*/
function sumArr (arrayInputed){
	let result = 0;
	for(let i = 0; i< arrayInputed.length; i++){
		
		if (Array.isArray(arrayInputed[i])){
			result = result + sumArr(arrayInputed[i]);
		} else{
		result = result + (parseInt(arrayInputed[i]) || 0);	
		}

	}
	return result;
}

/* Задача 12
// Сумма чисел массива (вложенные массивы и представление числа).
Получите данные о пользователях GitHub
Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

В песочнице есть тестовый пример.

Важные детали:

На каждого пользователя должен приходиться один запрос fetch.
Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.
*/

async function test() {
   let names = ['iliakan', 'remy', 'no.such.users'];

   // Запрашивать логин, пока github не вернёт существующего пользователя.
   async function getUsers(names) {
      let response;
      let result;
      let arrayResult = [];


      for (const name of names) {
         try {
            response = await fetch(`https://api.github.com/users/${name}`);
            if (response.status == 200) {
               result = await response.json();
               arrayResult.push(result);
            }
         } catch (err) {
            console.log(err);
         }
      }

      return arrayResult;
   }

   let users = await getUsers(names);
   console.log(users[0].login);
}


test();

