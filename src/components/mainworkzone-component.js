import {CreateAreaComponent} from './createarea-component.js';
import {CreateTaskBoardComponent} from './taskboard-component.js';
import {BaseComponent} from './base/BaseComponent.js';

const CreateArea = new CreateAreaComponent();
const CreateTaskBoard = new CreateTaskBoardComponent();

function createMainWorkzoneComponent() {

    return (
    `${CreateArea.getTemplate()}
      ${CreateTaskBoard.getTemplate()}`
      );
}

export class CreateMainWorkzoneComponent extends BaseComponent {
  getTemplate() {
    return createMainWorkzoneComponent();
  }
}



