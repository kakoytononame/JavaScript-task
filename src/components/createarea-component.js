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


export class CreateAreaComponent {
  getTemplate() {
    return createAreaComponentTemplate();
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