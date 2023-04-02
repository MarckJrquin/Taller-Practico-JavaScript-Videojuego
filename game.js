/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){

    let canvasSize = window.innerWidth * 0.6;

    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.75;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = (canvasSize / 10) - 1;
    
    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = '';
    for (let i = 0; i < 10; i++){
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
    
}