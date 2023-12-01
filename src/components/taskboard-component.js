import {CreateTaskTypeSectionComponent} from './tasktypesection-component.js';
import {BaseComponent} from './base/BaseComponent.js';

const CreateTaskTypeSection = new CreateTaskTypeSectionComponent();

function createTaskBoardComponentTemplate() {
    return (
    `<div class="TaskBoard">
    ${CreateTaskTypeSection.getTemplate()}
    </div>`
    );
}

export class CreateTaskBoardComponent extends BaseComponent{
  getTemplate() {
    return createTaskBoardComponentTemplate();
  }
}