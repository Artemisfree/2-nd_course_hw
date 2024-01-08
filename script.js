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
