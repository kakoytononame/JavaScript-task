import {BaseComponent} from './base/BaseComponent.js';

function createTaskComponentTemplate(id, text, taskType) {
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


export class CreateTaskComponent extends BaseComponent{

  #id = null;
  #status = null;
  #title = null;


  constructor({id, title,status}){
    super();
    this.#id = id;
    this.#status = status;
    this.#title = title;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.#id, this.#title, this.#status);
  }
}