'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btns);
console.log(circle);
console.log(hearts);
console.log(oneHeart);

hearts.forEach(item => {
    console.log(item);
});