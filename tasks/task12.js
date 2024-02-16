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

function availableCurr(arr, missingCurr) {

}