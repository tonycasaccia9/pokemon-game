import * as model from "./model.js";
import cardsView from "./cardsView.js";
import View from "./View.js";

// Elements
const formWindow = document.querySelector(".choose-pokemon-window");
const titleScreen = document.querySelector(".title-screen");
const typeBtnsContainer = document.querySelector(".type-buttons");
const cardsContainer = document.querySelector(".hp__card-container");

// Event Handler Functions

// Controllers
const controlQuestion = async function (type) {
  console.log(type);
  // Change state
  await model.fetchType(model.URL, type);
  console.log(model.state);
  // Render cards using new state data
  cardsView.renderCards(model.state);
};

// Event Listeners
titleScreen.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".title-screen__btn-start");
  if (!btn) return;
  cardsView.toggleForm();
});

formWindow.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".type-button");
  if (!btn) return;

  controlQuestion(btn.querySelector(".btn-text").textContent);
});
