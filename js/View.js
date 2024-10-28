export default class View {
  _data;
  formWindow = document.querySelector(".choose-pokemon-window");
  titleScreen = document.querySelector(".title-screen");
  typeBtnsContainer = document.querySelector(".type-buttons");
  cardsContainer = document.querySelector(".hp__card-container");
  deckContainer = document.querySelector(".hp__deck-container");

  render(data, deck = false) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    if (deck) {
      this.showParent();
      this.titleScreen.classList.remove("hidden");
    }
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  showParent() {
    this._parentEl.classList.remove("hidden");
  }
  hideParent() {
    this._parentEl.classList.add("hidden");
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
}
