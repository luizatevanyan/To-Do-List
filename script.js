let button = document.getElementById("submit-button");
let input = document.getElementById("input-row");
let list = document.getElementById("task-list");
button.addEventListener("click", function () {
  let valueFromInput = input.value;
  if (valueFromInput.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = valueFromInput;
  list.appendChild(li);
  let buttonForList = document.createElement("button");
  buttonForList.textContent = "X";
  li.appendChild(buttonForList);
  buttonForList.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
  });

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  input.value = "";
});
