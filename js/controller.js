import * as model from "./model.js";
import cardsView from "./cardsView.js";
import View from "./View.js";
import deckView from "./deckView.js";
import numberView from "./numberView.js";
import titleView from "./titleView.js";
import formView from "./formView.js";

// Elements
const formWindow = document.querySelector(".choose-pokemon-window");
const titleScreen = document.querySelector(".title-screen");
const typeBtnsContainer = document.querySelector(".type-buttons");
const cardsContainer = document.querySelector(".hp__card-container");
const copyright = document.querySelector(".copyright");
// Event Handler Functions

// Controllers
const controlSelectType = async function (type) {
  formView.renderSpinner();
  // Change state
  await model.fetchType(model.URL, type);

  // Render cards using new state data
  cardsView.hideFormShowCards();
  cardsView.render(model.state);
  // titleView.hideParent();
};

const controlAddPokemon = function (pokemon) {
  // Clear pokemon options field so new types can be rendered
  model.clearPokemonSelection();

  // title screen adjustment
  titleView.adjustPos();
  deckView.adjustPos();

  // Add selected pokemon to deck
  model.addPokemon(pokemon);
  console.log(model.state);

  // Increase number by 1
  if (model.state.deck.length > model.DECK_LENGTH - 1)
    titleView.render(model.state.deck);
  else numberView.render(model.state.deck);

  // render selected cards under title
  cardsView.hideParent();
  deckView.render(model.state.deck, true);
};

// Event Listeners
titleScreen.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".title-screen__btn-start");
  if (!btn) return;
  copyright.style.display = "none";
  if (model.state.deck.length === model.DECK_LENGTH) {
    console.log(model.DECK_LENGTH);
    model.clearPokemonSelection();
    model.clearDeck();
    deckView.render(model.state.deck);
    deckView.hideParent();
    titleView.reset(model.state.deck);
    return;
  } else {
    formView.render();
    formView.showParent();
    titleView.hideParent();
    if (model.state.deck.length > 0) deckView.hideParent();
  }
});

formWindow.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".type-button");
  if (!btn) return;

  controlSelectType(btn.querySelector(".btn-text").textContent);
});

const init = function () {
  cardsView.addHandlerCardSelect(controlAddPokemon);
};
init();

/*
///////////////////////////////
// To do list
1. Number changes with each pokemon chosen (1, 2, 3, 4, 5) ✅

2. Export hiding functionality out of universal render() method ✅
2. Refactor View.returnToMenu(deck) to fit in with View.render✅

3. Change container styling for cards and deck

4. Play again functionality


*/
