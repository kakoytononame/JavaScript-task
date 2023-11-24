function createTaskComponentTemplate(text, taskType) {
    return (
    changeTaskText(text, taskType)
      );
}

const changeTaskText = (text, taskType) => {

    return(`
    <div class="Task" id= "${taskType}">
        <p>${text}</p>
    </div>`)
    
}

export class CreateTaskComponent {
  getTemplate(text) {
    return createTaskComponentTemplate(text);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate(text));
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}