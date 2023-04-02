console.log(maps);

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    /* === Métodos del canvas === */
    game.fillRect(0, 0, 100, 100); /* Lugar donde inicia el trazo. */
    game.clearRect(0, 0, 50, 50);

}