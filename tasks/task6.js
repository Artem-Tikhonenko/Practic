// Место для первой задачи
function sayHello(name) {
    return console.log(`Привет ${name}`);
}

sayHello('Антон');

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));
// Место для третьей задачи
function getMathResult(num, times) {

    if(typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for ( let i = 1; i <= times; i++) {
        if ( i === times) {
            str = str + num * i;
        }else {
            str = str + num * i + "---";
        }
    }

    return str;

}


console.log(getMathResult(10, 5));