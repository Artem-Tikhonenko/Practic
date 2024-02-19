'use strict';

const soldier = {
    health: 500,
    armor: 222,
    hi: function(){
        console.log('hiiiiii');
    }
}

const john = Object.create(soldier);

// console.log(john.armor);
john.hi();