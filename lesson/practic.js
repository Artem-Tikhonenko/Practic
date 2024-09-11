'use strict';
let counter = 0;

function createConter() {
    counter = 1;

    const myFunction = function() { 
        counter = counter + 1; 
        return counter; 
    }

    return myFunction;
}

const incr = createConter(); 
const c1 = incr();
const c2 = incr();
const c3 = incr();

console.log(c1,c2,c3);