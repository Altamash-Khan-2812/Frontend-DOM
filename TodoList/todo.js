const addButton = document.getElementById("add-button");
const ul = document.getElementById("todo-list");
const input = document.getElementById("todo-input");

addButton.addEventListener("click", function (e) {
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  h2.textContent = input.value;
  input.value = "";

  li.appendChild(h2);
  ul.appendChild(li);
  addButton.disabled = true;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteButton);
});

input.addEventListener("input", function (e) {
  if (input.value.trim() !== "") {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});
