import View from "./View.js";

class DeckView extends View {
  _parentEl = document.querySelector(".home-screen-container");

  _generateMarkup(deck) {
    const markup =
      //   ` <div class="hp__deck-container ">
      //     <ul class="hp__card-list">` +
      deck
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
        .join(""); //+
    //   `</ul>
    //   </div>`;
    return markup;
  }
}

export default new DeckView();
