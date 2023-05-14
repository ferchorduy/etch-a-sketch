const grid = document.createElement('div')
const containerMain = document.getElementById('container-main');

grid.classList.add('grid');
containerMain.appendChild(grid);

for (let i = 0; i < 256; i++) {

  const gridPiece = document.createElement('div');
  gridPiece.classList.add('grid-piece');
  grid.appendChild(gridPiece);

}

// const gridPieces = document.getElementsByClassName('grid-piece');
// Array.from(gridPieces).forEach( (gridPiece) => {
//   gridPiece.addEventListener('mouseenter', () => {
//     gridPiece.classList.add('colored');
//   });
// });

const squareInput = document.createElement('input');
const colorChoice = document.createElement('div');
const rainbowColor = document.createElement('button');
const greyShadesColor = document.createElement('button');
squareInput.classList.add('input-x');
colorChoice.classList.add('color-choice');
rainbowColor.classList.add('rainbow-color');
greyShadesColor.classList.add('grey-shades-color');

squareInput.placeholder = "x&y";
rainbowColor.textContent = "rainbow";
greyShadesColor.textContent = "greyshades"

containerMain.insertBefore(squareInput, grid);
containerMain.appendChild(colorChoice);
colorChoice.appendChild(rainbowColor);
colorChoice.appendChild(greyShadesColor);