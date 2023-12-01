import {BaseComponent} from './base/BaseComponent.js';

function createAreaComponentTemplate() {
    return (
    `<div class="CreateBlock">
    <div class="CreateBlock_top_string">
        <h2 class="CreateBlock_header">Новая задача</h2>
    </div>
    <div class="CreateBlock_bottom_string">
        <div class="NewTaskInput">
            <p>Название задачи</p></div>
        <button class="CreateTaskButton">+ Добавить</button>
    </div>
</div>`
      );
}


export class CreateAreaComponent extends BaseComponent{
  getTemplate() {
    return createAreaComponentTemplate();
  }
}