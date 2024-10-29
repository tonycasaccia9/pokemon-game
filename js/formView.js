import View from "./View.js";

class FormView extends View {
  _parentEl = document.querySelector(".choose-pokemon-window");

  _generateMarkup() {
    const markup = ` <form class="form ">
    <!--Unordered list for each quesstion?  -->
   <h3 class="form-heading">Select Pokemon Type...</h3>
   <!-- <label>Type</label> -->
   <div class="type-buttons">
       <div class="type-button fire" role="button" tabindex="0">
           <span class="icon">🔥</span>
           <span class="btn-text">Fire</span>
       </div>
       <div class="type-button water" role="button" tabindex="0">
           <span class="icon">💧</span>
           <span class="btn-text">Water</span>
       </div>
       <div class="type-button electric" role="button" tabindex="0">
           <span class="icon">⚡</span>
           <span class="btn-text">Electric</span>
       </div>
       <div class="type-button grass" role="button" tabindex="0">
           <span class="icon">🌱</span>
           <span class="btn-text">Grass</span>
       </div>
       <div class="type-button ice" role="button" tabindex="0">
           <span class="icon">❄️</span>
           <span class="btn-text">Ice</span>
       </div>
       <div class="type-button fighting" role="button" tabindex="0">
           <span class="icon">🥊</span>
           <span class="btn-text">Fighting</span>
       </div>
       <div class="type-button poison" role="button" tabindex="0">
           <span class="icon">☠️</span>
           <span class="btn-text">Poison</span>
       </div>
       <div class="type-button ground" role="button" tabindex="0">
           <span class="icon">🌍</span>
           <span class="btn-text">Ground</span>
       </div>
       <div class="type-button flying" role="button" tabindex="0">
           <span class="icon">🕊️</span>
           <span class="btn-text">Flying</span>
       </div>
       <div class="type-button psychic" role="button" tabindex="0">
           <span class="icon">🔮</span>
           <span class="btn-text">Psychic</span>
       </div>
       <div class="type-button bug" role="button" tabindex="0">
           <span class="icon">🐛</span>
           <span class="btn-text">Bug</span>
       </div>
       <div class="type-button rock" role="button" tabindex="0">
           <span class="icon">🪨</span>
           <span class="btn-text">Rock</span>
       </div>
       <div class="type-button ghost" role="button" tabindex="0">
           <span class="icon">👻</span>
           <span class="btn-text">Ghost</span>
       </div>
       <div class="type-button dragon" role="button" tabindex="0">
           <span class="icon">🐉</span>
           <span class="btn-text">Dragon</span>
       </div>
       <div class="type-button dark" role="button" tabindex="0">
           <span class="icon">🌑</span>
           <span class="btn-text">Dark</span>
       </div>
       <div class="type-button steel" role="button" tabindex="0">
           <span class="icon">🔩</span>
           <span class="btn-text">Steel</span>
       </div>
       <div class="type-button fairy" role="button" tabindex="0">
           <span class="icon">🧚</span>
           <span class="btn-text">Fairy</span>
       </div>
       <div class="type-button normal" role="button" tabindex="0">
           <span class="icon">⚪</span>
           <span class="btn-text">Normal</span>
       </div>
   </div>

   
<!--         
   <label>Size</label>
   <select class="size">
     <option value="small">Small</option>
     <option value="medium">Medium</option>
     <option value="large">Large</option>
   </select> -->
   <!-- <input class="size" type="text" /> -->

   
 </form>`;

    return markup;
  }
}

export default new FormView();
