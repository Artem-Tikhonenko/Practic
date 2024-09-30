const btn = document.querySelectorAll('button');

btn.forEach(btns => {
    btns.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = 'blue';
        e.target.innerHTML = '<button >Нажми меня</button>';
    }, {once: true});
});