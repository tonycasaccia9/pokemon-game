import View from "./View.js";

class titleView extends View {
  _parentEl = document.querySelector(".title-screen");

  _generateMarkup() {
    const markup = `
    <div class="title__img-container">
        
        <img src="/img/pokemon-logo.png" class="title__img"/>
        <img src="/img/pokeball.png" class="title__img pokeball"/>
      </div>
    <h1 class="title-screen__heading">Congrats! You are Ready for Battle! </br>
        <span class="secondary-text">5 of 5 Pokemon Ready</span>
    </h1>
    <a class="title-screen__btn-start" href="#">Play again</a>`;

    return markup;
  }

  _generateMarkupReset() {
    return `
  <div class="title__img-container">
    <img src="/img/pokemon-logo.png" class="title__img"/>
    <img src="/img/pokeball.png" class="title__img pokeball"/>
  </div>
  <h1 class="title-screen__heading">Choose your Pokemon </br>
    <span class="secondary-text">...0 of 5</span></h1>
  <a class="title-screen__btn-start" href="#">Start</a>
  `;
  }
}

export default new titleView();
