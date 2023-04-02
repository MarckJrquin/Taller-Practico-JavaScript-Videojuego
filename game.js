console.log(maps);

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    /* === Métodos del canvas === */
    game.fillRect(80, 30, 150, 100); /* Lugar donde inicia el trazo. */
    game.clearRect(100, 50, 110, 60); /* Sirve como borrador para alguna parte del canvas. */
    game.font = '12px Verdana'; /* Tamaño que tendrá el texto del fillText y tipo de fuente.*/
    game.fillStyle = 'purple'; /* Nos permite añadir estilos CSS al fillText.*/
    game. textAlign = 'start'; /* Posición del texto, donde comienza o donde termina respecto a la posición X y Y. */
    game.fillText('MarckJrquin', 120, 85); /* Nos permite insertar texto dentro del canvas.*/

}