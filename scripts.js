// set initial variables and prompt user
let input = prompt("Choose a grid size:", "16");
let dimension = parseInt(input);
let columns = dimension;
let rows = dimension;
const container = document.getElementById('container');

// function to draw grid
function makeRows(rows, columns) {
    
    for (let i = 0; i < columns; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < rows; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            // change colour on mouseover
            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = 'black';
            })
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
};


// call grid function

makeRows(dimension, dimension);

// function to delete the old grid

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function newGrid() {
    // reset cells to white
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });

    // remove all children from container
    removeAllChildren(container);

    // prompt user for input
    let num = prompt("Choose a grid size:", "16");
    let val = parseInt(num);

    // make new grid
    makeRows(val, val);
}

// new grid button
let newGridBtn = document.getElementById('new-grid-btn');
newGridBtn.addEventListener("click", newGrid);
