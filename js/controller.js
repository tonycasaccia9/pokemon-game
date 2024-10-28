import * as model from "./model.js";
import cardsView from "./cardsView.js";
import View from "./View.js";
import deckView from "./deckView.js";

// Elements
const formWindow = document.querySelector(".choose-pokemon-window");
const titleScreen = document.querySelector(".title-screen");
const typeBtnsContainer = document.querySelector(".type-buttons");
const cardsContainer = document.querySelector(".hp__card-container");

// Event Handler Functions

// Controllers
const controlQuestion = async function (type) {
  // Change state
  await model.fetchType(model.URL, type);
  // Render cards using new state data
  cardsView.render(model.state);
};

const controlAddPokemon = function (pokemon) {
  // Clear pokemon options field
  model.clearPokemon();
  // Add selected pokemon to deck
  model.selectPokemon(pokemon);
  console.log(model.state);
  // render selected cards under title
  deckView.returnToMenu(model.state.deck);
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

const init = function () {
  cardsView.addHandlerCardSelect(controlAddPokemon);
};
init();
