// hw-2 JS
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// const firstIphone = 2007;
// confirm(firstIphone);

// const jsFounder = 'Brendan Eich';
// confirm(jsFounder);

// a = 10;
// let b = 2;
// let sum = a + b;
// let diff = a - b;
// let multip = a * b;
// let divis =  a / b;
// alert(`Сумма: ${sum},
// Разность: ${diff},
// Произведение: ${multip},
// Частное: ${divis}`
// )

// let result = alert(b ** 5);

// a = 9;
// result = alert(a % b);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// const age = prompt('Сколько вам лет?', '');
// alert(`Вам ${age}`);

// let user = {
//     name: 'Alex',
//     age: 100,
//     isAdmin: true
// };
// user['city of residence'] = 'Stockholm';
// user['age'] = 27;
// delete user['city of residence']
// let info = prompt('Какую информацию хотите узнать о пользователе?', '');
// alert(user[info]);

// let username = prompt('Как тебя зовут?', '');
// alert(`Привет, ${username}!`);


// hw-3 JS
// let password = 'ggfes34';
// let repeatPass = prompt('Введите пароль');
// let message;
// message = (password === repeatPass) ? 'Пароль введен верно' :
// 'Пароль введен неправильно';
// alert(message);

// let c = prompt('Введите число');
// message = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
// alert(message);

// let d = prompt('Введите число');
// let e = prompt('Введите число');
// message = (d > 100 || e > 100)? 'Верно' : 'Неверно';
// alert(message);

// let a = '2';
// let b = '3';
// let summary = Number(a) + Number(b);
// alert(summary);

// let monthNumber = Number(prompt('Введи номер месяца'));
// switch (monthNumber) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		alert('Зима')
// 		break
// 	case 3:
// 	case 4:
// 	case 5:
// 		alert('Весна')
// 		break
// 	case 6:
// 	case 7:
// 	case 8:
// 		alert('Лето')
// 		break
// 	case 9:
// 	case 10:
// 	case 11:
// 		alert('Осень')
// 		break
// 	default:
// 		alert('Такого номера месяца не бывает')
// 		break
// }

// a = Number(prompt('Пожалуйста, введите любое число'));
// if (!isNaN(a) === true) {
//     message = (a % 2) === 0 ? 'Число четное' : 'Число нечетное'
//     alert(message);
// } else {
//     alert('Это не число')
// }

// let clientOS = confirm('У тебя iOS?');
// console.log(clientOS);
// let clintDeviceYear = prompt('Год выпуска твоего телефона');
// if ((clientOS === true) && clintDeviceYear >= 2015) {
// 	alert('Установите версию приложения для iOS по ссылке');
// } else if ((clientOS === false) && clintDeviceYear >= 2015) {
// 	alert('Установите версию приложения для Android по ссылке')
// } else if (clientOS === true && clintDeviceYear <= 2015) {
// 	alert('Установите облегченную версию приложения для iOS по ссылке')
// } else if (clientOS === false && clintDeviceYear <= 2015) {
// 	alert('Установите облегченную версию приложения для Android по ссылке')
// }


// hw-4 JS
// let i = 0;
// while (i < 2) {
//     console.log('Привет');
//     i++;
// }

// i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// i = 7;
// while (i <= 22) {
//     console.log(i);
//     i++;
// }

// const obj = {
// 	'Коля': '200',
// 	'Вася': '300',
// 	'Петя': '400'
// };
// for (let name in obj) {
//     console.log(`${name} — зарплата ${obj[name]}`)
// };

// let n = 1000;
// let num = 0;
// while (n > 50) {
//     n /= 2;
//     num++;
// }
// console.log(`Количество итераций: ${num}`);

// let friday = 1;
// for (; friday <= 31; friday += 7) {
//     console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
// }

//hw-5 JS
// let a = prompt(`Введите первое число`);
// let b = prompt(`Введите второе число`);

// function compNum(a, b) {
//     if (a > b) {
//         return b;
//     } else if (a < b) {
//         return a;
//     } else {
//         return a;
//     };
// }

// let result1 = compNum(a, b);
// console.log(result1);

// a = prompt(`Введите любое число`);

// function evenOrOdd(a) {
//         let message = (a % 2) === 0 ? 'Число четное' : 'Число нечетное';
//         return message;
// }

// let result2 = evenOrOdd(a);
// console.log(result2);

// a = prompt(`Введите число`);

// function exp(a) {
//     let result = a ** 2;
//     return result
// }

// let result = exp(a);
// console.log(result);

// let age = prompt(`Сколько тебе лет?`);

// function sayHello(age) {
//     if (age < 0) {
//         alert('Вы ввели неправильное значение')
//     } else if (age >= 13) {
//         alert('Добро пожаловать!')
//     } else {
//         alert('Привет, друг!')
//     }
// }

// sayHello(age);

// a = prompt(`Введите любое число`);
// b = prompt(`Введите любое число`);

// function checkForNumber(a, b) {
// 	if (!isNaN(a) && !isNaN(b) === true) {
//         let multip = a * b;
//         return multip;
// 	} else {
// 		return('Одно или оба значения не являются числом')
// 	};
// }

// let result5 = checkForNumber(a, b);
// console.log(result5);

// a = prompt(`Введите число`)

// function exponentiation(a) {
//     if (!isNaN(a) === true) {
//         let triplexA = a ** 3;
//         let answer = `${a} в кубе равняется ${triplexA}`
//         return answer
//     } else {
//         return('Переданный параметр не является числом');
//     }
// }

// let result6 = exponentiation(a);
// console.log(result6);

// function getArea() {
//     this.circleArea = Math.PI * this.radius ** 2;
//     return this.circleArea
// }

// function getPerimeter() {
//     this.perimeterCircle = 2 * Math.PI * this.radius;
//     return this.perimeterCircle
// }

// const circle1 = {
// 	radius: prompt('Задай радиус для 1-ой окружности'),
// 	getArea: getArea,
// 	getPerimeter: getPerimeter,
// }

// const circle2 = {
// 	radius: prompt('Задай радиус для 2-ой окружности'),
// 	getArea: getArea,
// 	getPerimeter: getPerimeter,
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());


//hw-6 JS
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) {
        console.log(numbers[i]);
        break;
    }
};

console.log(numbers.indexOf(4));

const numbs = [1, 3, 5, 10, 20];
console.log(numbs.join(' '));

let num = [];
for (let i = 0; i < 3; i++) {
    const array = [];
    for(let j = 0; j < 3; j++) {
        array.push(1);
    }
    num.push(array);
}
console.log(num);

const arrayNext = [1, 1, 1];
arrayNext.push(2, 2, 2);
console.log(arrayNext);

let arrayDel = [9, 8, 7, 'a', 6, 5];
arrayDel = arrayDel.sort();
arrayDel.pop();
console.log(arrayDel);

let guess = Number(prompt('Угадай число'));
if (arrayDel.includes(parseInt(guess))) {
    alert('Угадал!');
} else {
    alert('Не угадал :(');
}

let string = 'abcdef';
let arrayString = string.split('');
arrayString.reverse();
let stringJoin = arrayString.join('');
console.log(stringJoin);

let arrayDouble = [
    [1, 2, 3],
    [4, 5, 6]
]
let arrayConcat = arrayDouble[0].concat(arrayDouble[1]);
console.log(arrayConcat);

let arrayRandom = [];
for (let i = 0; i < 5; i++) {
    arrayRandom.push(i * 2);
}
console.log(arrayRandom);

let total = [];
for (let i = 0; i < arrayRandom.length - 1; i++) {
    let sum = arrayRandom[i] + arrayRandom[i + 1];
    total.push(sum);
}
console.log(total);

let squaringArray = (nums) => {
    let arrayNums = nums.split(',').map(Number);
    let squar = arrayNums.map(el => el ** 2);
    return squar
}
let nums = prompt('введи массив чисел через запятую');
let result = squaringArray(nums);
console.log(result);

let array = [];
let stringArray = (strings) => {
    for (let i = 0; i < strings.length; i++) {
        let count = strings[i].length;
        array.push(count);
    }
    return array
}

let strings = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let resultCount = stringArray(strings);
console.log(resultCount);

function filterPositive(array) {
    let negativeNum = []
	for (let i = 0; i < array.length; i++) {
        if (array[i] < 0){
            negativeNum.push(array[i]);
        }
    }
    console.log(negativeNum);
}

filterPositive([-1, 0, 5, -10, 56])
filterPositive([-25, 25, 0, -1000, -2])

let min = 0;
let max = 10;
let randomArray = []
let evenArray = []
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNum);
}
for (let j = 0; j < randomArray.length; j++) {
        if (randomArray[j] % 2 === 0) {
            evenArray.push(randomArray[j])
        }
}
console.log(randomArray)
console.log(evenArray);

let randomSix = [];
for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomSix.push(randomNum);
}
let totalSix = randomSix.reduce((a, b) => a + b); 
let average = totalSix / randomSix.length;
console.log(randomSix)
console.log(average);
