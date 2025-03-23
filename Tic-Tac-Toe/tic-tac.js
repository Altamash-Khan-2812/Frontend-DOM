const squareBox = document.querySelectorAll(".game-square");
const playerTurn = document.querySelector(".game-heading");
const resetButton = document.getElementById("restart-button");

let winningConditions = [
  [squareBox[0], squareBox[1], squareBox[2]],
  [squareBox[3], squareBox[4], squareBox[5]],
  [squareBox[6], squareBox[7], squareBox[8]],
  [squareBox[0], squareBox[4], squareBox[8]],
  [squareBox[2], squareBox[4], squareBox[6]],
  [squareBox[0], squareBox[3], squareBox[6]],
  [squareBox[1], squareBox[4], squareBox[7]],
  [squareBox[2], squareBox[5], squareBox[8]],
];

let currentPlayerTurn = "X";
let count = 0;
squareBox.forEach((box) => {
  box.addEventListener("click", function (e) {
    count++;
    box.textContent = currentPlayerTurn;
    currentPlayerTurn = currentPlayerTurn === "X" ? "0" : "X";
    box.disabled = true;
    playerTurn.textContent =
      playerTurn.textContent === "Player 1's turn"
        ? "Player 2's turn"
        : "Player 1's turn";

    for (let i = 0; i < winningConditions.length; i++) {
      let [firstBox, secondBox, thirdBox] = winningConditions[i];
      if (
        firstBox.textContent !== "" &&
        firstBox.textContent === secondBox.textContent &&
        secondBox.textContent === thirdBox.textContent
      ) {
        resetButton.style.display = "block";
        playerTurn.textContent = `Player ${
          winningConditions[i][0].textContent === "X" ? 1 : 2
        } Won!`;

        for (let box of squareBox) {
          box.disabled = true;
        }
      }
    }

    if (count === 9) {
      resetButton.style.display = "block";
      playerTurn.textContent = "Tie Game!";
    }
  });
});

resetButton.addEventListener("click", resetGameFunc);

function resetGameFunc() {
  for (let box of squareBox) {
    box.textContent = "";
    box.disabled = false;
    resetButton.style.display = "none";
    count = 0;
    playerTurn.textContent = "Player 1's turn";
  }
}
