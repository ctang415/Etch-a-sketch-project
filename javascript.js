const container = document.querySelector('.container');

function createSquare() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = 'blue';
        })
        div.addEventListener('mouseout', function() {
            div.style.backgroundColor = 'white';
        })
        container.appendChild(div);
    }
};
createSquare();


