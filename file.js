/*
Задание 1
Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор)
необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
*/
let num = prompt("Пожалуйста введите число : ");
if (Boolean(+num)) {
  if (+num % 2 === 0) {
    console.log("Число чётное.");
  } else {
    console.log("Число не чётное.");
  }
} else {
  console.log("Упс, кажется, вы ошиблись.");
}
/*
Задание 2
Дана переменная x, которая может принимать любое значение.
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу.
В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.
 */
let x = true;

switch (typeof x) {
  case "boolean":
    console.log("x - boolean");
    break;

  case "string":
    console.log("x - string");
    break;

  case "number":
    console.log("x - number");
    break;

  default:
    console.log("Тип x не определён");
}

/*
Задание 3
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH". 
*/
let str = "Hello";
let strRevers = str.split("").reverse().join("");
console.log(strRevers);

/*
Задание 4
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

let randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(randomNum);


/*Задание 5
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/

let array = [5, 3, 2, 6, 9, 0, 1];

console.log(`Длинна массива = ${array.length} элентов.`);

let result = array.map(function(item, index, array){
  return console.log(`индекс = ${index} элемент = ${item}`);
});