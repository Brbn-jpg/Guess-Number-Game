"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 12;

// document.querySelector(".guess").value = 33;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const highscoreCounter = document.querySelector(".highscore");
let body = document.querySelector("body");
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const scoreValue = function (value) {
  document.querySelector(".score").textContent = value;
};

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", function () {
  // When guess is wrong
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🚫 No number!");
    score--;
    scoreValue(score);
  }
  // When guess is right
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.style.padding = "3rem 3rem";
    if (score > highscore) {
      highscore = score;
      highscoreCounter.textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬇️ Too High" : "⬆️ Too Low");
      score--;
      scoreValue(score);
    } else {
      displayMessage("💥 You lost the game!");
      scoreValue(0);
    }
  }
});

// Reseting the game
const againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue(score);
  displayMessage("Start guessing...");
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
});
