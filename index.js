let a = 10;
alert(a);
a = 20;
alert(a);

const firstIphone = 2007;
confirm(firstIphone);

const jsFounder = 'Brendan Eich';
confirm(jsFounder);

a = 10;
let b = 2;
let sum = a + b;
let diff = a - b;
let multip = a * b;
let divis =  a / b;
alert(
    `Сумма: ${sum}, \
Разность: ${diff}, \
Произведение: ${multip}, \
Частное: ${divis}`
)

let result = alert(b ** 5);

a = 9;
result = alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

const age = prompt('Сколько вам лет?', '');
alert(`Вам ${age}`);

let user = {
    name: 'Alex',
    age: 100,
    isAdmin: true
};
user['city of residence'] = 'Stockholm';
user['age'] = 27;
delete user['city of residence']
let info = prompt('Какую информацию хотите узнать о пользователе?', '');
alert(user[info]);

let username = prompt('Как тебя зовут?', '');
alert(`Привет, ${username}!`);
