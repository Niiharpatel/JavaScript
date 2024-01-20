let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#sbmt");
const user_input = document.querySelector("#guessField");
const p_guess = document.querySelector(".gueses");
const remaining = document.querySelector(".lastResult");
const loOrHi = document.querySelector(".loOrHi");
const startOver = document.querySelector(".result_box");

const p = document.createElement("p");

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(user_input.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Plese enter a valid number!");
  } else if (guess < 1) {
    alert("Plese enter a number more than one");
  } else if (guess > 100) {
    alert("Plese enter a number less than hundred");
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
};

const displayGuess = (guess) => {
  user_input.value = "";
  p_guess.innerHTML += `${guess} `;
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess}`;
};

const displayMessage = (message) => {
  loOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
  user_input.value = "";
  user_input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameBtn = document.querySelector("#newGame");

  newGameBtn.addEventListener("click", function () {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    p_guess.innerHTML = "";
    remaining.innerHTML = `${11 - numOfGuess}`;
    user_input.removeAttribute("disabled", "");
    startOver.removeChild(p);
    playGame = true;
  });
};
