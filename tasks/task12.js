const someString = 'This is some strange string';
const num = 6;

function reverse(str) {
    if(typeof(str) !== 'string') {
        console.log('Error')
    } else {
        let rev = str.split('').reverse().join('');

        console.log(rev);
    }

}
reverse(num);
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

let curr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let str = '';

    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i){
        if(curr !== missingCurr){
            str += `${curr}\n`;
        }
    })

    return str;

}

console.log(availableCurr(curr, 'RUB'));