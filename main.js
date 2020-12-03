const gameBoard = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

let playerOnesTurn = true;

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
      console.log(gameBoard);
    });
  });
});

function checkForWin() {}
