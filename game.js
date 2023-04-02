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

function startGame(){
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = '';
    for (let i = 0; i < 10; i++){
        for (let j = 1; j <= 10; j++){
            game.fillText(emojis['X'], elementsSize * i, elementsSize * j);
        }
    }
}