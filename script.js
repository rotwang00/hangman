const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const buttonContainer = document.getElementById("button-container");

for (let letter of alphabetArray) {
  let newButton = document.createElement("button");
  newButton.innerHTML = letter;
  newButton.setAttribute("id", letter);
  newButton.setAttribute("class", "letter-button");
  buttonContainer.appendChild(newButton);
}

// Add event listener to entire letter button container.
// Use event bubbling to check if it's actually a button that has been pressed.
buttonContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("letter-button")) {
    console.log(e.target.id);
  }
});
