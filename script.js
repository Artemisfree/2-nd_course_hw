function season() {

    let monthNumber = Number(prompt('Введи номер месяца'));

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
       console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Лето');
	} else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log('Осень');
	} else {
        console.log('Такого времени года не бывает :(')
    }
}

function words() {
    let wordsArray = [
			'Яблоко',
			'Груша',
			'Дыня',
			'Виноград',
			'Персик',
			'Апельсин',
			'Мандарин',
		];
    wordsArray = wordsArray.sort(() => Math.random() - 0.5);
    alert(wordsArray);
    let first = prompt('Чему равнялся первый элемент массива?');
    let second = prompt('Чему равнялся последний элемент массива?');
    if (first === wordsArray[0] && second === wordsArray[wordsArray.length - 1]) {
        alert('Все верно! Вы молодец!');
    } else if (first === wordsArray[0] || second === wordsArray[wordsArray.length - 1]) {
		alert('Вы были близки к победе!');
	} else {
		alert('Неверно');
	}
}
