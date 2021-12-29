const board = document.querySelector('.board');

for(let i = 0; i < 500; i++) {
    let block = document.createElement('div');
    block.classList.add('box');
    board.appendChild(block);

    block.addEventListener('mouseover', () => {
        block.style.background = 'red';
    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1717';
    })
}

