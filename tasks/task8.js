// Место для первой задачи
function getTimeFromMinutes(minTotal) {
    if(typeof(minTotal) !== 'number' || minTotal < 0 || !Number.isInteger(minTotal)) {
        return "Ошибка, проверьте данные"
    }

    let hours = Math.floor(minTotal / 60);
    let minutes = minTotal % 60;

    let hoursStr = '';

    switch(hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 21.5, 3, 4));