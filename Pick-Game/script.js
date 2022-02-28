"use strict";

// variables

let numberPrevious = 0;
let score = 0;
let player = 1;
let point = [0, 0];

// Buttons

const buttonRoolDice = document.querySelector(".roolDice");
const buttonSaveScore = document.querySelector(".save");
const buttonNewGame = document.querySelector(".new-game");
let playing = true;

// Text

const showH2DiceNumber = document.querySelector(".diceStyle h2");

// Functions

const generateNumber = () => Math.trunc(Math.random() * 6) + 1;
const resetValue = () => {
  score = 0;
  numberPrevious = 0;
};

const changePlayerResetCount = function () {
  document.querySelector(`.p${player}`).classList.toggle("playerActive");
  document.querySelector(`.scorep${player} h2`).textContent = 0;
  player = player == 1 ? 2 : 1;
  document.querySelector(`.p${player}`).classList.toggle("playerActive");
  showH2DiceNumber.classList.add("hidden");
};

// Button click

buttonRoolDice.addEventListener("click", function () {
  const numberGenerator = generateNumber();
  if (playing) {
    showH2DiceNumber.classList = `dice${numberGenerator}`;
    if (numberGenerator >= numberPrevious) {
      score += numberGenerator;
      numberPrevious = numberGenerator;
    } else {
      resetValue();
      changePlayerResetCount();
    }
    document.querySelector(`.scorep${player} h2`).textContent = String(score);
  }
});

buttonSaveScore.addEventListener("click", function () {
  point[player - 1] += score;
  document.querySelector(`.p${player} h2`).textContent = String(
    point[player - 1]
  );
  if (point[player - 1] >= 100) {
    playing = false;
    // buttonSaveScore.hidden = true;
    // buttonRoolDice.hidden = true;
    showH2DiceNumber.classList = "";
    document.querySelector(`.scorep${player} h2`).textContent = String(0);
    resetValue();
    showH2DiceNumber.textContent = `Player ${player} win!`;
  } else {
    resetValue();
    changePlayerResetCount();
  }
});

buttonNewGame.addEventListener("click", function () {
  // buttonSaveScore.hidden = false;
  // buttonRoolDice.hidden = false;
  resetValue();
  point = [0, 0];
  playing = true;
  document.querySelector(`.p1 h2`).textContent = String(point[0]);
  document.querySelector(`.p2 h2`).textContent = String(point[1]);
  document.querySelector(`.scorep1 h2`).textContent = String(0);
  document.querySelector(`.scorep2 h2`).textContent = String(0);
});