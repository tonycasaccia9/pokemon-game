import View from "./View.js";

class NumberView extends View {
  _parentEl = document.querySelector(".secondary-text");

  _generateMarkup() {
    console.log(this._data.length);
    const markup = `...${
      this._data.length <= 6 ? this._data.length : 6
    } out of 6`;

    return markup;
  }
}

export default new NumberView();
