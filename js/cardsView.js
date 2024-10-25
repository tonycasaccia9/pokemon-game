import View from "./View.js";

class CardsView extends View {
  _parentEl = document.querySelector(".hp__card-container");

  renderCards = function (data) {
    this._data = data;
    this.hideForm();
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.classList.remove("hidden");
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  };

  _generateMarkup() {
    console.log(this._data);
    const markup = this._data.pokemon
      .map((pok) => {
        console.log(pok);
        return `
    <li class="hp__card-item">
      <div class="hp__card">
        <h3 class="hp__card-title">${
          pok.name[0].toUpperCase() + pok.name.slice(1)
        }</h3>
        <img src="${
          pok.sprites.front_default
        }" alt="Charmander" class="hp__card-image" />
        <p class="hp__card-type">${this._data.type}</p>
      </div>
    </li> `;
      })
      .join("");

    console.log(markup);
    return markup;
  }
}
export default new CardsView();
