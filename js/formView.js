import View from "./View.js";

class FormView extends View {
  _parentEl = document.querySelector(".choose-pokemon-window");

  _generateMarkup() {
    console.log(this._data.length);
    const markup = `...${
      this._data.length + 1 <= 5 ? this._data.length + 1 : 5
    } out of 5`;

    return markup;
  }
}

export default new FormView();
