import View from "./View.js";

class CardsView extends View {
  _parentEl = document.querySelector(".hp__card-container");

  _generateMarkup() {
    const markup = this._data.cards
      .map((pok) => {
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

    return markup;
  }

  hideFormShowCards() {
    this.hideForm();
    this._parentEl.classList.remove("hidden");
  }

  addHandlerCardSelect(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const card = e.target.closest(".hp__card-item");
      if (!card) return;
      const pokemonName = card
        .querySelector(".hp__card-title")
        .textContent.toLowerCase();

      const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemonName}.mp3`;
      const cryAudio = new Audio(cryUrl);
      // cryAudio
      //   .play()
      //   .catch((error) => console.error("Cry not available for:", pokemonName));

      handler(pokemonName);
    });
  }
}
export default new CardsView();
