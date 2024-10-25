export default class View {
  _data;
  formWindow = document.querySelector(".choose-pokemon-window");
  titleScreen = document.querySelector(".title-screen");
  typeBtnsContainer = document.querySelector(".type-buttons");

  render(data) {}

  toggleForm = function () {
    this.titleScreen.classList.toggle("hidden");
    this.formWindow.classList.toggle("hidden");
  };

  hideForm = function () {
    this.titleScreen.classList.add("hidden");
    this.formWindow.classList.add("hidden");
  };
}
