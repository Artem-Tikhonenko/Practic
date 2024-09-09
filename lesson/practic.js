'use strict';

const obj = {
    name: 'Artem',
    family: 'Tikhonenko',
    age: 34,
    location: {
        city: 'kobrin',
        der: 'mazuri'
    }
}

console.log(Object.keys(obj.location).length);