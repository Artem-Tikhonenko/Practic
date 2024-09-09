const someString = 'This is some strange string';

function reverse(str) {

    let rev = str.split('').reverse().join('');

    console.log(rev);

}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if(arr === 0) {
        console.log('Нет доступных валют');
    }
    console.log(arr);
}

availableCurr([...baseCurrencies, ...additionalCurrencies]);