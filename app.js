const grid = document.createElement('div')
const containerMain = document.getElementById('container-main');

grid.classList.add('grid');
containerMain.appendChild(grid);

changeGridLength(16);

function changeGridLength(lengthValue) {

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  for (let i = 0; i < (lengthValue * lengthValue); i++) {

    const gridPiece = document.createElement('div');
    gridPiece.classList.add('grid-piece');
    gridPiece.style.height = `${640/lengthValue}px`;
    gridPiece.style.width = `${640/lengthValue}px`;
    grid.appendChild(gridPiece);
  
  }

  colorInGrid();
  
}

function colorInGrid() {
  const gridPieces = document.getElementsByClassName('grid-piece');
  Array.from(gridPieces).forEach( (gridPiece) => {
    gridPiece.addEventListener('mouseover', () => {
      gridPiece.classList.add('colored');
    });
  });
};

const squareInput = document.createElement('input');
const colorChoice = document.createElement('div');
const rainbowColor = document.createElement('button');
const greyShadesColor = document.createElement('button');
let squareInputValue = 0;
squareInput.classList.add('input-x');
colorChoice.classList.add('color-choice');
rainbowColor.classList.add('rainbow-color');
greyShadesColor.classList.add('grey-shades-color');

squareInput.placeholder = "x&y";
rainbowColor.textContent = "rainbow";
greyShadesColor.textContent = "greyscale";

squareInput.type = 'number';
squareInput.max = 64;
squareInput.min = 0;
squareInput.maxLength = 2;
squareInput.pattern = '[0-9]{1-2}'

containerMain.insertBefore(squareInput, grid);
containerMain.appendChild(colorChoice);
colorChoice.appendChild(rainbowColor);
colorChoice.appendChild(greyShadesColor);

squareInput.addEventListener('keydown', (e) => {
  
  if (e.code === 'Enter') {
    if (squareInput.value > 0 && squareInput.value <= 64) {
      squareInputValue = squareInput.value;
      changeGridLength(squareInputValue);
    }
    else {
      console.log('wrong');
    }
  } return;

});