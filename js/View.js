export default class View {
  _data;
  formWindow = document.querySelector(".choose-pokemon-window");
  titleScreen = document.querySelector(".title-screen");
  typeBtnsContainer = document.querySelector(".type-buttons");
  cardsContainer = document.querySelector(".hp__card-container");
  deckContainer = document.querySelector(".hp__deck-container");

  render(data) {
    this._data = data;
    this.hideForm();
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.classList.remove("hidden");
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  toggleForm = function () {
    this.titleScreen.classList.toggle("hidden");
    this.formWindow.classList.toggle("hidden");
    if (!this.deckContainer.classList.contains("hidden"))
      this.deckContainer.classList.add("hidden");
  };

  hideForm = function () {
    this.titleScreen.classList.add("hidden");
    this.formWindow.classList.add("hidden");
  };

  returnToMenu(deck) {
    // Hide the card selection screen
    this.cardsContainer.classList.add("hidden");

    // Clear the previous deck before adding new Pokémon
    this.deckContainer.innerHTML = "";

    // Show the title screen and deck
    this.deckContainer.classList.remove("hidden");
    this.titleScreen.classList.toggle("hidden");

    // Generate and insert the new deck's markup
    const markup = this._generateMarkup(deck);
    this.deckContainer.insertAdjacentHTML("beforeend", markup);
  }
}
