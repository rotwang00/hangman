// Initialize global variables
let lettersGuessed = [];
let secretWord = [];
let wordInProgress = [];
let wrongGuesses = 0;

// Set up secret word container
const secretWordContainer = document.getElementById("secret-word-container");

// Set up buttons
const buttonContainer = document.getElementById("button-container");
const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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

function setUpRound() {
  secretWord = "GIRAFFE".split("");
  wordInProgress = [];
  for (let i = 0; i < secretWord.length; i++) {
    wordInProgress.push("_");
  }
  lettersGuessed = [];
  guessesMade = 0;
  updateGallows();
  return;
}

function updateGallows() {
  while (gallowsContainer.firstChild) {
    gallowsContainer.removeChild(gallowsContainer.firstChild);
  }
  gallowsContainer.appendChild(gallowsImages[wrongGuesses]);
}

function updateSecretWordDisplay() {
  secretWordContainer.innerHTML = "";
  for (letter of wordInProgress) {
    secretWordContainer.innerHTML += letter + " ";
  }
}

function processGuess(guess) {
  if (!lettersGuessed.includes(guess)) {
    lettersGuessed.push(guess);
    let goodGuess = false;

    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == guess) {
        goodGuess = true;
        wordInProgress[i] = guess;
      }
    }

    if (goodGuess) {
      updateSecretWordDisplay();
    } else {
      wrongGuesses++;
      updateGallows();
    }

    // Is entire word guessed?
    if (!wordInProgress.includes("_")) {
      alert("You won!");
    }

    // Maximum guesses reached?
    if (wrongGuesses == 6) {
      alert("You lost!");
    }
  }
}

setUpRound();

updateSecretWordDisplay();
