'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', function() {   //в таком виде, this (контекст вызова) будет сам элемент на котором произошло событие
                                             //с трелочной функции контекст потеряется
    console.log(this);  // <button class="btn">Animation</button>
});


const obj = {
    sum: 5,
    sayNumber: function() {      //у метода - контекст ссылается на объект
        const say = () => {      //у стрелочной ф-ции нет контекста вызова, она берет его у родителя 
            console.log(this); // {sum: 5, sayNumber: ƒ}
        }
        say();
    }
};

obj.sayNumber();