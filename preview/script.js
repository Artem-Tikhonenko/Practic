const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block'),
      body = document.querySelector('body');

btns[0].addEventListener('click', (e) => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList == 'red') {
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);