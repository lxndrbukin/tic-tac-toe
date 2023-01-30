class Game {
  constructor() {
    this.players = ['X', 'O'];
    this.currentPlayer = 'X';
    this.currentPlayerIsCircle = false;
    this.boxes = ['', '', '', '', '', '', '', '', ''];
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  addEventListeners() {
    let { currentPlayer, currentPlayerIsCircle, boxes, checkWin } = this;
    const boxDivs = Array.from(document.querySelectorAll('.box'));
    boxes.map((box, index) => {
      boxDivs[index].addEventListener('click', () => {
        // change players
        currentPlayer = !currentPlayerIsCircle ? 'X' : 'O';
        currentPlayerIsCircle = !currentPlayerIsCircle;
        // current player box tick
        boxes[index] = currentPlayer;
        boxDivs[index].innerHTML = currentPlayer;
        checkWin();
      });
    });
  }

  generateTemplate() {
    const showBoxes = () => {
      return this.boxes
        .map((box, index) => {
          return /*html*/ `<div class="box">${box}</div>`;
        })
        .join('');
    };
    return /*html*/ `
      <div class="game-wrapper">
        <div class="winning-message"></div>
          <div class="tic-tac-toe">
            ${showBoxes()}
          </div>
      </div>
    `;
  }

  checkWin() {
    let { winningCombinations, boxes, currentPlayer } = this;
    winningCombinations.some((combination) => {
      combination.every((index) => {
        if (boxes[index] === currentPlayer) {
          console.log('yey');
        }
      });
    });
  }

  createGame() {
    const root = document.querySelector('.root');
    root.innerHTML = this.generateTemplate();
    this.addEventListeners();
  }
}

const root = document.querySelector('.root');

const tictactoe = new Game();

tictactoe.createGame();
