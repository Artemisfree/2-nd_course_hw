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
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}

const obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]}`)
};

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(`Количество итераций: ${num}`);

let friday = 1;
for (; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`)
}
