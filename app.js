// Variables
const boxes = Array.from(document.getElementsByClassName('box'));
const players = Array.from(document.getElementsByClassName('player'));
const winMsg = document.querySelector('.winning-message');
const restart = document.querySelector('.restart');
let currentPlayer;

// Render Win message
const winningMsg = (player) => winMsg.innerText = `Player ${player.innerText} wins`;

// Button to restart (reload) the game
restart.addEventListener('click', () => location.reload());

players.map(player => {
    player.addEventListener('click', () => {
        if (player.classList.contains(`${player.innerText}`)) {
            player.className = `player`;
        } else if (!player.classList.contains(`${player.innerText}`)) {
            player.className = `player ${player.innerText} current`;
        }
    })
})

// All possible combinations of the game
players.map(player => {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', () => {
        if (player.classList.contains(player.innerText)) {    
            boxes[i].innerText = player.innerText;
        }
            if (boxes[0].innerText === player.innerText && boxes[1].innerText === player.innerText && boxes[2].innerText === player.innerText){
                winningMsg(player);
            } else if (boxes[0].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[8].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[0].innerText === player.innerText && boxes[3].innerText === player.innerText && boxes[6].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[1].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[7].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[2].innerText === player.innerText && boxes[5].innerText === player.innerText && boxes[8].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[3].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[5].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[6].innerText === player.innerText && boxes[7].innerText === player.innerText && boxes[9].innerText === player.innerText) {
                winningMsg(player);
            } else if (boxes[2].innerText === player.innerText && boxes[4].innerText === player.innerText && boxes[6].innerText === player.innerText) {
                winningMsg(player);
            }
        })
    }
})