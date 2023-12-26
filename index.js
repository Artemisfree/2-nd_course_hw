// hw-1 JS
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




// hw-2 JS
let password = 'ggfes34';
let repeatPass = prompt('Введите пароль');
let message;
message = (password === repeatPass) ? 'Пароль введен верно' :
'Пароль введен неправильно';
alert(message);

let c = prompt('Введите число');
message = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
alert(message);

let d = prompt('Введите число');
let e = prompt('Введите число');
message = (d > 100 || e > 100)? 'Верно' : 'Неверно';
alert(message);

let a = '2'
let b = '3'
let summary = Number(a) + Number(b);
alert(summary);

let monthNumber = prompt('Введи номер месяца');
switch (parseInt(monthNumber)) {
	case 1:
	case 2:
	case 12:
		alert('Зима')
		break
	case 3:
	case 4:
	case 5:
		alert('Весна')
		break
	case 6:
	case 7:
	case 8:
		alert('Лето')
		break
	case 9:
	case 10:
	case 11:
		alert('Осень')
		break
	default:
		alert('Такого номера месяца не бывает')
		break
}

let a = Number(prompt('Пожалуйста, введите любое число'));
console.log(!isNaN(a));
message = (a % 2) === 0 ? 'Число четное' : 'Число нечетное'
alert(message);

let clientOS = navigator.userAgent;
console.log(clientOS);
let clintDeviceYear = prompt('Год выпуска твоего телефона');
if (clientOS.includes('iPhone') && clintDeviceYear >= 2015) {
	alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS.includes('Android') && clintDeviceYear >= 2015) {
	alert('Установите версию приложения для Android по ссылке');
} else if (clientOS.includes('iPhone') && clintDeviceYear <= 2015) {
	alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS.includes('Android') && clintDeviceYear <= 2015) {
	alert('Установите облегченную версию приложения для Android по ссылке')
}
