// Variables
const boxes = Array.from(document.getElementsByClassName('box'));
const players = Array.from(document.getElementsByClassName('player'));
const winMsg = document.querySelector('.winning-message');
let currentPlayer;

players.map(player => {
    player.addEventListener('click', () => {
        if (player.classList.contains(`${player.innerText}`)) {
            player.className = `player`;
        } else if (!player.classList.contains(`${player.innerText}`)) {
            player.className = `player ${player.innerText} current`;
        }
    })
})

players.map(player => {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', () => {
        if (player.classList.contains(player.innerText)) {    
            boxes[i].innerText = player.innerText;
        }
        if (boxes[0].innerText === player.innerText && boxes[1].innerText === player.innerText && boxes[2].innerText === player.innerText){
            winMsg.innerText = `Player ${player.innerText} wins`;
        } else if (boxes[0].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[8].innerText === player.innerText) {
            winMsg.innerText = `Player ${player.innerText} wins`;
        } else if (boxes[0].innerText === player.innerText && boxes[3].innerText === player.innerText && boxes[6].innerText === player.innerText) {
            winMsg.innerText = `Player ${player.innerText} wins`;
        } else if (boxes[1].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[7].innerText === player.innerText) {
            winMsg.innerText = `Player ${player.innerText} wins`;
        } else if (boxes[2].innerText === player.innerText && boxes[5].innerText === player.innerText && boxes[8].innerText === player.innerText) {
            winMsg.innerText = `Player ${player.innerText} wins`;
        }
        })
    }
})

