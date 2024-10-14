'use strict';

const obj = {
    name: 'Alex',
    tel: '+223232323',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
}

const clone = JSON.parse(JSON.stringify(obj));
clone.parents.mom = 'Ann';
console.log(obj);
console.log(clone);