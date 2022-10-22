// set initial variables and prompt user

let modal = document.getElementById('modal');
let warning = document.getElementById('warning');
warning.style.opacity = '0';
let userInput = document.getElementById('grid-size');

let modalOk = document.getElementById('modal-ok');

modalOk.addEventListener("click", function() {
    if (userInput.value > 0 && userInput.value < 101) {
        newGrid();
        modal.style.opacity = '0';
        modal.style.zIndex = -1;
        warning.style.opacity = '0';
    } else {
        warning.style.opacity = '1';
    }
})

let modalCancel = document.getElementById('modal-cancel');
modalCancel.addEventListener("click", function() {
    userInput.value = null;
    modal.style.opacity = '0';
    warning.style.opacity = '0';
    modal.style.zIndex = -1;
})



let dimension = userInput.value;
let columns = dimension;
let rows = dimension;
const container = document.getElementById('container');
let colourToggle = false;

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
                if (colourToggle === false) {
                    // black
                    cell.style.backgroundColor = 'black';
                } else if (colourToggle === true) {
                    // random colour
                    const randomColour = Math.floor(Math.random()*16777215).toString(16);
                    cell.style.backgroundColor = "#" + randomColour;
                }
                });
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
};


// call grid function

makeRows(dimension, dimension);


// colour toggle
let grayscaleBtn = document.getElementById('grayscale-btn');

grayscaleBtn.addEventListener("click", function() {
    if (colourToggle === true) {
        colourToggle = false;
    }
   
});

let colourBtn = document.getElementById('rainbow-btn');

colourBtn.addEventListener("click", function() {
    if (colourToggle === false) {
        colourToggle = true;
    }
})


// function to delete the old grid

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// make a new grid
function newGrid() {
 clearGrid();
    // remove all children from container
    removeAllChildren(container);

    // prompt user for input
    let val = userInput.value;

    // make new grid
    makeRows(val, val);
}


// clear grid
function clearGrid() {
   // reset cells to white
   let cells = document.querySelectorAll('.cell');
   cells.forEach(cell => {
       cell.style.backgroundColor = 'lightgray';
   });

}

// new grid button
let newGridBtn = document.getElementById('new-grid-btn');
newGridBtn.addEventListener("click", function() {
    modal.style.opacity = '1';
    modal.style.zIndex = 1;
});

// clear grid button
let clearGridBtn = document.getElementById('clear-grid-btn');
clearGridBtn.addEventListener("click", clearGrid);

