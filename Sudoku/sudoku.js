// Write your code here.
const cells = document.querySelectorAll("td:not(.given-number)");
const numbers = document.querySelectorAll(".number-control");
const input = document.getElementById("candidate-switch");

let selectedCell = null;
let selectedNumber = null;
cells.forEach((cell) => {
  cell.addEventListener("click", function (e) {
    if (selectedCell) {
      selectedCell.classList.remove("selected");
      e.target.classList.add("selected");
    } else {
      e.target.classList.add("selected");
    }
    selectedCell = cell;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    selectedNumber = number.textContent;

    if (selectedCell && !input.checked) {
      selectedCell.lastElementChild.textContent = selectedNumber;
    } else {
      let candidatesValueArray =
        selectedCell.firstElementChild.textContent.split("");
      console.log(candidatesValueArray);

      if (candidatesValueArray.indexOf(selectedNumber) === -1) {
        candidatesValueArray.push(selectedNumber);
      } else {
        candidatesValueArray.splice(
          candidatesValueArray.indexOf(selectedNumber),
          1
        );
      }

      selectedCell.firstElementChild.textContent = candidatesValueArray
        .sort()
        .join("");
    }
  });
});
