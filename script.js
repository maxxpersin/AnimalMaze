var monkeys = [];
var rabbits = [];
var turkeys = [];
var tiles = [];

function init() {
    setTiles();

    var clock = document.getElementById('clock');
    setInterval(renderTime, 1000);

    setInterval(moveAnimals, 1000);
    //moveAnimals();
}

function setTiles() {
    let maze = document.getElementById('maze');
    for (let i = 0; i < 15; i++) {
        tiles[i] = [];
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

                if (noBoundry(tile)) {
                    switch (getRandomInt(0, 15)) {
                        case 0:
                            tile.classList.add('monkey'); // ORIGIN WILL BE USED FOR THE DOCUMENT QUERY
                            monkeys.push({ animal: 'monkey', x: j, y: i, originX: j, originY: i })
                            break;
                        case 1:
                            tile.classList.add('turkey');
                            turkeys.push({ animal: 'turkey', x: j, y: i, originX: j, originY: i })
                            break;
                        case 2:
                            tile.classList.add('rabbit');
                            rabbits.push({ animal: 'rabbit', x: j, y: i, originX: j, originY: i })
                            break;
                    }
                }
            }

            tiles[i].push(tile);
            maze.appendChild(tile);
        }
    }

    console.log(tiles);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function moveAnimals() {
    moveMonekys();
    moveTurkeys();
    moveRabbits();
}

function moveMonekys() {
    monkeys.forEach(monkey => {
        let boundry = getBoundry(monkey.x, monkey.y);
        if (!boundry.left) {
            let monkeyLoc = tiles[monkey.y][monkey.x];
            monkeyLoc.style.left = monkeyLoc.style.left - monkeyLoc.getBoundingClientRect().width;
        }
    });
}

function moveTurkeys() {
    turkeys.forEach(turkey => {

    });
}

function moveRabbits() {
    rabbits.forEach(rabbit => {

    });
}

function renderTime() {
    let time = new Date();
    clock.textContent = time.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

}

function noBoundry(tile) { // Ensure all animal tiles have no borders, for better animations
    if (tile.style['border-top'] || tile.style['border-left'] || tile.style['border-bottom'] || tile.style['border-right']) {
        return false;
    }

    return true;
}

function getBoundry(y, x) {
    let boundry = { top: false, left: false, bottom: false, right: false };

    if (y < 15 && tiles[x][y + 1].style['border-bottom']) { // TOP
        boundry.top = true;
    }
    if (y > 0 && tiles[x][y - 1].style['border-top']) { // BOTTOM
        boundry.bottom = true;
    }
    if (x > 0 && tiles[x - 1][y].style['border-right']) { // LEFT
        boundry.left = true;
    }
    if (x < 15 && tiles[x + 1][y].style['border-left']) {
        boundry.right = true;
    }

    return boundry;
}