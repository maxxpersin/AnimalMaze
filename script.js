function init() {
    setTiles();
    moveAnimals();
}

function setTiles() {
    let maze = document.getElementById('maze');
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            let tile = document.createElement('span');
            tile.classList.add('tile');
            tile.innerHTML = ''
            for (let k = 0; k < 4; k++) {
                switch (k) {
                    case 0:
                        if (getRandomInt(0, 2) == 1) {
                            tile.style['border-top'] = 'solid 1px black';
                        }
                        break;
                    case 1:
                        if (getRandomInt(0, 2) == 1) {
                            tile.style['border-left'] = 'solid 1px black';
                        }
                        break;
                    case 2:
                        if (getRandomInt(0, 2) == 1) {
                            tile.style['border-bottom'] = 'solid 1px black';
                        }
                        break;
                    case 3:
                        if (getRandomInt(0, 2) == 1) {
                            tile.style['border-right'] = 'solid 1px black';
                        }
                        break;
                }

                switch (getRandomInt(0, 50)) {
                    case 0:
                        tile.classList.add('monkey');
                        break;
                    case 1:
                        tile.classList.add('turkey');
                        break;
                    case 2:
                        tile.classList.add('rabbit');
                        break;
                }
            }
            maze.appendChild(tile);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}