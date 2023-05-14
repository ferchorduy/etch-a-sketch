const grid = document.createElement('div')
grid.classList.add('grid');
grid.setAttribute('style', 'height: 640px; width: 640px; border: solid 1px black; background-color: purple;')
const containerMain = document.getElementById('container-main');
containerMain.appendChild(grid);