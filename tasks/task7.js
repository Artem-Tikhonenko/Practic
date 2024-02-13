// Место для первой задачи
function calculateVolumeAndArea(n) {

    if (typeof (n) !== 'number' || n < 0 || !Number.isInteger(n)) {
        return "При вычислении произошла ошибка";
    }

    let volume = n * n * n;;
    let area = 6 * (n * n);
    // volume = n * n * n;

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    // return ;
}

console.log(calculateVolumeAndArea(15));

// Место для второй задачи
function getCoupeNumber(number) {
    if(typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
        return "Ошибка. Проверьте правильность введенного номера места"
    }
    if(number === 0 || number > 36) {
        return "Таких мест в вагоне не существует"
    }

    return Math.ceil(number / 4);


}
console.log(getCoupeNumber('0'));
