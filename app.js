class Game {
  constructor() {
    this.players = ['X', 'O'];
    this.currentPlayer = 'X';
    this.currentPlayerIsCircle = false;
    this.winner = false;
    this.boxes = ['', '', '', '', '', '', '', '', ''];
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.message = `It's ${this.currentPlayer}'s turn`;
  }

  addEventListeners() {
    let { currentPlayer, currentPlayerIsCircle, boxes, winner } = this;
    const boxDivs = Array.from(document.querySelectorAll('.box'));
    boxes.map((box, index) => {
      boxDivs[index].addEventListener('click', () => {
        // change players
        currentPlayer = !currentPlayerIsCircle ? 'X' : 'O';
        currentPlayerIsCircle = !currentPlayerIsCircle;
        // current player box tick
        boxes[index] = currentPlayer;
        boxDivs[index].innerHTML = currentPlayer;
        this.checkWin(currentPlayer, winner);
      });
    });
  }

  generateTemplate() {
    const { boxes, message } = this;
    const showBoxes = () => {
      return boxes
        .map((box, index) => {
          return /*html*/ `<div class="box">${box}</div>`;
        })
        .join('');
    };
    return /*html*/ `
      <div class="game-wrapper">
        <div class="message">${message}</div>
          <div class="tic-tac-toe">
            ${showBoxes()}
          </div>
      </div>
    `;
  }

  showMessage(currentPlayer, winner) {
    const message = document.querySelector('.message');
    if (winner) {
      message.innerHTML = `Player ${currentPlayer} wins!`;
    } else {
      message.innerHTML = `Now it's ${currentPlayer}'s turn!`;
    }
  }

  checkWin(currentPlayer, winner) {
    let { winningCombos, boxes } = this;
    for (let winningCombo of winningCombos) {
      if (
        boxes[winningCombo[0]] === boxes[winningCombo[1]] &&
        boxes[winningCombo[1]] === boxes[winningCombo[2]] &&
        boxes[winningCombo[0]] !== ''
      ) {
        winner = true;
        this.showMessage(currentPlayer, winner);
      } else {
        this.showMessage(currentPlayer, winner);
      }
    }
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
