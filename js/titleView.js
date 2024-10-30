import View from "./View.js";
import pokeball from "../img/pokeball.png";
import logo from "../img/pokemon-logo.png";

class titleView extends View {
  _parentEl = document.querySelector(".title-screen");

  _generateMarkup() {
    const markup = `
    <div class="title__img-container">
        
        <img src="${logo}" class="title__img logo"/>
        <img src="${pokeball}" class="title__img pokeball"/>
      </div>
    <h1 class="title-screen__heading">Congrats! Ready for Battle! </br>
        <span class="secondary-text">6 of 6 Pokemon Ready</span>
    </h1>
    <a class="title-screen__btn-start" href="#">Play again</a>`;

    return markup;
  }

  _generateMarkupReset() {
    return `
  <div class="title__img-container">
    <img src="${logo}" class="title__img logo"/>
    <img src="${pokeball}" class="title__img pokeball"/>
  </div>
  <h1 class="title-screen__heading">Choose your Pokemon </br>
    <span class="secondary-text">...0 of 6</span></h1>
  <a class="title-screen__btn-start" href="#">Start</a>
  `;
  }
}

export default new titleView();
