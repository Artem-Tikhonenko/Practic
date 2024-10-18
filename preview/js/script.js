'use strict';

const names = ['Ann', 'Ivan', 'Alexander', 'HarryPotter'];
const shortName = names.filter(name => {
    return name.length < 5;
});
console.log(shortName);

// const test = time => {
//     return new Promise (resolve => {
//         setTimeout(() => {resolve()}, time);
//     });
// };

// test(1000).then(() => {console.log('1000 ms')});
// test(2000).then(() => {console.log('2000 ms')});

// Promise.all([test(1000), test(2000)]).then(() => console.log('ALL'));
// Promise.race([test(1000), test(2000)]).then(() => console.log('ALL1'));




// console.log('Запрос данных...');

// const req = new Promise (function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);

//     },2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then((data) => {
//     data.test = 'Error';
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('ERROR');
// }).finally(() => {
//     console.log('Finally');
// });
    
// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest;

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application / josn', 'charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'ERROR';
//         }
//     });
// });