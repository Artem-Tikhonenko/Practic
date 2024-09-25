'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btns);
console.log(circle);
console.log(wrapper);
console.log(hearts);
console.log(oneHeart);

hearts.forEach(item => {
    item.style.color = 'green';
});

oneHeart.style.backgroundColor = 'green';

const div = document.createElement('div');
div.classList.add('black');
document.body.prepend(div);
div.innerHTML = '<h1>Hello</h1>';