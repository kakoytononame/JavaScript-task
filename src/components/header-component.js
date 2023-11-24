import {createElement} from '../render.js';


function createHeaderComponentTemplate() {
    return (
        `<header class="Top">
            <h1 class="Top_text">Список задач</h1>
        </header>`
      );
}


export class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}
