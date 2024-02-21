'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '50%';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);

div.innerHTML = 'Hello world';