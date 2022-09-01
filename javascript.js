const container = document.querySelector('.container');


const button = document.querySelector('.button');

button.addEventListener('click', function() {
    let ask = prompt('Number of squares? (Between 1-100)', 1)
    if (ask <= 100 && ask >= 1) {
        clearGrid();
        createGrid(ask, ask);
    }
    else {
        clearGrid();
        createGrid(16,16);
        alert('Please return a number between 1-100.');
    }
});

function clearGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}


function createGrid(col, row) {
    container.style.setProperty("--grid-columns", col);
    container.style.setProperty("--grid-rows", row);
    for (let i = 0; i < (col * row); i++){
        let div = document.createElement('div');
        container.appendChild(div).className = "div";
        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = getRandomColor();
    })
    }
};

createGrid(16,16);

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

