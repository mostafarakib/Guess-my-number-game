"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const updateScore = () => {
  document.querySelector(".score").textContent = score;
};

const updateHighScore = () => {
  if (score > highScore) {
    highScore = score;
  }
  document.querySelector(".highscore").textContent = highScore;
};

const updateNumber = (num) => {
  document.querySelector(".number").textContent = num;
};

const updateStyle = (numberWidth, bgColor) => {
  document.querySelector(".number").style.width = numberWidth;
  document.querySelector("body").style.backgroundColor = bgColor;
};

document.querySelector(".check").addEventListener("click", function () {
  const inputValue = parseInt(document.querySelector(".guess").value);

  if (!inputValue) {
    displayMessage("Please enter a number between 1 and 20");
  } else if (inputValue === secretNumber) {
    displayMessage("Correct number! You won!");
    updateScore();
    updateHighScore();
    updateNumber(secretNumber);
    updateStyle("30rem", "#60b347");
  } else if (inputValue !== secretNumber) {
    if (score > 1) {
      displayMessage(inputValue > secretNumber ? "Too high!" : "Too low!");
      score--;
      updateScore();
    } else {
      displayMessage("Game Over! You lose!");
      score = 0;
      updateScore();
      updateHighScore();
      updateNumber(secretNumber);
      updateStyle("30rem", "#d4170d");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  updateScore();
  updateNumber("?");

  document.querySelector(".guess").value = "";

  updateStyle("15rem", "#222");
});
