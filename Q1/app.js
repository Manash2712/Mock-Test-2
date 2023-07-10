const box = document.querySelector('.box')

box.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'yellow';
    e.target.style.height = '600px';
    e.target.style.width = '600px';
})