import View from "./View.js";

class DeckView extends View {
  _parentEl = document.querySelector(".hp__deck-container");

  _generateMarkup() {
    const markup = this._data
      .map((pok) => {
        return `
        <li class="hp__card-item">
          <div class="hp__card">
            <h3 class="hp__card-title">${
              pok.name[0].toUpperCase() + pok.name.slice(1)
            }</h3>
            <img src="${pok.sprites.front_default}" alt="${
          pok.name
        }" class="hp__card-image" />
            <p class="hp__card-type">${pok.types
              .map((type) => type.type.name)
              .join(", ")}</p>
          </div>
        </li>`;
      })
      .join("");
    return markup;
  }
}

export default new DeckView();
