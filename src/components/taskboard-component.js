import {CreateTaskTypeSectionComponent} from './tasktypesection-component.js';

const CreateTaskTypeSection = new CreateTaskTypeSectionComponent();

function createTaskBoardComponentTemplate() {
    return (
    `<div class="TaskBoard">
    ${CreateTaskTypeSection.getTemplate()}
    </div>`
    );
}

export class CreateTaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
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

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
}