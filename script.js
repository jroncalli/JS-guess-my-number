"use strict";

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let secretNumber = document.querySelector(".number");
let guessInput = document.querySelector(".guess");
let highScore = document.querySelector(".highscore");
let pageBody = document.querySelector("body");
const checkButton = document.querySelector(".check");
const resetButton = document.querySelector(".again");

let yourScore = 20;
let newHighScore = 0;

let secretNum = Math.trunc(Math.random() * 20) + 1;

checkButton.addEventListener("click", function () {
  let guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = "😟 Please take a guess!";
  } else if (guess === secretNum) {
    message.textContent = "You guessed it! 🎈";
    pageBody.style.backgroundColor = "#60b347"; /// just some comments
    secretNumber.style.width = "30rem";
    secretNumber.textContent = secretNum;
    if (yourScore > newHighScore) {
      newHighScore = yourScore;
      highScore.textContent = newHighScore;
    }
  } else if (guess !== secretNum) {
    if (yourScore > 1) {
      message.textContent = guess > secretNum ? "Your guess is to high 📈" : "Your guess is to low 📈";
      yourScore--;
      score.textContent = yourScore;
    } else {
      message.textContent = "Sorry, you lose!";
      score.textContent = 0;
      secretNumber.textContent = secretNum;
    }
  }
});

resetButton.addEventListener("click", function () {
  yourScore = 20;
  score.textContent = yourScore;
  message.textContent = "Start guessing...";
  pageBody.style.backgroundColor = "#222";
  secretNumber.style.width = "15rem";
  secretNumber.textContent = "?";
  secretNum = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = "";
});

// Refactored code below - used Ternary operator to consolidate code

// } else if (guess < secretNum) {
//   if (yourScore > 1) {
//     message.textContent = "Your guess is to low 📈";
//     yourScore--;
//     score.textContent = yourScore;
//   } else {
//     message.textContent = "Sorry, you lose!";
//     score.textContent = 0;
//     secretNumber.textContent = secretNum;
//   }
// } else if (guess > secretNum) {
//   if (yourScore > 1) {
//     message.textContent = "Your guess is to high 📉";
//     yourScore--;
//     score.textContent = yourScore;
//   } else {
//     message.textContent = "Sorry you lose!";
//     score.textContent = 0;
//     secretNumber.textContent = secretNum;
//   }
// }

// Reset button
