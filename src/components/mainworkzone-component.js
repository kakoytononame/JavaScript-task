import {CreateAreaComponent} from './createarea-component.js';
import {CreateTaskBoardComponent} from './taskboard-component.js';

const CreateArea = new CreateAreaComponent();
const CreateTaskBoard = new CreateTaskBoardComponent();

function createMainWorkzoneComponent() {

    return (
    `${CreateArea.getTemplate()}
      ${CreateTaskBoard.getTemplate()}`
      );
}

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement;
  }


export class CreateMainWorkzoneComponent {
  getTemplate() {
    return createMainWorkzoneComponent();
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



