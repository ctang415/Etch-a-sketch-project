const container = document.querySelector('.container');

function createSquare() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = getRandomColor();
        })
        container.appendChild(div);
    }
};
createSquare();



function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}