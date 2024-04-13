const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let guessesMade = 0;

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
    processGuess(e.target.id);
  }
});

// Set up gallows images array
const gallowsContainer = document.getElementById("gallows");
let gallowsImages = [];
let currentGallowsImage = 0;
for (let i = 0; i <= 6; i++) {
  let gallowsImage = document.createElement("img");
  gallowsImage.src = `images/hangman-${i}.svg`;
  gallowsImages.push(gallowsImage);
}

// Set up secret word display
const secretWordContainer = document.getElementById("secret-word");

function updateGallows() {
  while (gallowsContainer.firstChild) {
    gallowsContainer.removeChild(gallowsContainer.firstChild);
  }
  gallowsContainer.appendChild(gallowsImages[guessesMade]);
}

function updateSecretWordDisplay() {}

function getSecretWord() {
  let word = "GIRAFFE".split("");
  return word;
}

function processGuess(guess) {
  console.log(guess);
}
