// Место для первой задачи
function calculateVolumeAndArea(num) {

    if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "При вычислении произошла ошибка";
    }

    let volume = num * num * num;
    let area = 6 * (num * num);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;

}

console.log(calculateVolumeAndArea(5));


// Место для второй задачи
function getCoupeNumber(coupeNumber) {

    if(typeof(coupeNumber) !== 'number' || !Number.isInteger(coupeNumber) || coupeNumber < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if(coupeNumber === 0 || coupeNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(coupeNumber / 4);

}

console.log(getCoupeNumber(33));