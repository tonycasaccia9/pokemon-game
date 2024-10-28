import View from "./View.js";

class titleView extends View {
  _parentEl = document.querySelector(".title-screen");

  _generateMarkup() {
    console.log(this._data.length);
    const markup = `...${
      this._data.length + 1 <= 5 ? this._data.length + 1 : 5
    } out of 5`;

    return markup;
  }
}

export default new titleView();
