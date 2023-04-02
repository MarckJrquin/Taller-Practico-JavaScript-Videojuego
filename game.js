/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    canvasSize = Math.min(window.innerHeight, window.innerWidth)*0.75;
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    elementsSize = (canvasSize / 10) - 1;
    startGame();
}

function normalizeMap(map){
    let mapNormalized = map.trim().replaceAll(" ", "").split('\n');
    mapNormalized = mapNormalized.map(row => row.split(''));
    return mapNormalized;
}

function startGame(){
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = '';

    const map = normalizeMap(maps[0]);
    console.log(map);

    for (let row = 1; row <= 10; row++){
        for (let col = 0; col < 10; col++){
            game.fillText(emojis[map[row-1][col]], elementsSize * col, elementsSize * row);
        }
    }
}