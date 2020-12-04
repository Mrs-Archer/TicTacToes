const gameBoard = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

let playerOnesTurn = true;
let turnCounter = 0;

gameBoard.forEach(function (e, iy) {
  e.forEach(function (e, ix) {
    const currentBoardPosition = $(`#la-box-${iy}-${ix}`);
    currentBoardPosition.click(function () {
      if (!gameBoard[iy][ix]) {
        if (playerOnesTurn) {
          gameBoard[iy][ix] = 1;
          playerOnesTurn = !playerOnesTurn;
          currentBoardPosition.addClass("la-player-1");
        } else {
          gameBoard[iy][ix] = 2;
          playerOnesTurn = !playerOnesTurn;
          currentBoardPosition.addClass("la-player-2");
        }
      }
      turnCounter++;
      addTheMessage();
    });
  });
});

function checkForWin() {
  if (
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][2] === gameBoard[0][1]
  ) {
    if (gameBoard[0][0]) return gameBoard[0][0];
  }
  if (
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][2] === gameBoard[1][1]
  ) {
    if (gameBoard[1][0]) return gameBoard[1][0];
  }
  if (
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][2] === gameBoard[2][1]
  ) {
    if (gameBoard[2][0]) return gameBoard[2][0];
  }
  if (
    gameBoard[0][0] === gameBoard[1][0] &&
    gameBoard[2][0] === gameBoard[1][0]
  ) {
    if (gameBoard[2][0]) return gameBoard[2][0];
  }
  if (
    gameBoard[0][1] === gameBoard[1][1] &&
    gameBoard[2][1] === gameBoard[1][1]
  ) {
    if (gameBoard[2][1]) return gameBoard[2][1];
  }
  if (
    gameBoard[0][2] === gameBoard[1][2] &&
    gameBoard[2][2] === gameBoard[1][2]
  ) {
    if (gameBoard[2][2]) return gameBoard[2][2];
  }
  if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[2][2] === gameBoard[1][1]
  ) {
    if (gameBoard[0][0]) return gameBoard[0][0];
  }
  if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[2][0] === gameBoard[1][1]
  ) {
    if (gameBoard[1][1]) return gameBoard[1][1];
  }
}

function addTheMessage() {
  if (turnCounter === 9) {
    $(".winning-message").html("Game end in a Draw");
  }
  if (checkForWin()) {
    $(".winning-message").html(
      "Congratulations Player - " + checkForWin() + " !!!"
    );
  }

  console.log(checkForWin());
}
