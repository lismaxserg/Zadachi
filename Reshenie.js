
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
