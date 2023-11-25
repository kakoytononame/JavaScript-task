import {CreateTaskComponent} from './task-component.js'
import {TasksService} from '../services/GetTaskService.js'




const taskService = new TasksService();
const boardTasks = [...taskService.getBoardTasks()];

function createTaskTypeSectionComponentTemplate() {
    
    return AddTaskComponents();
}

const AddTaskComponents = () => {

    var resultComponent = '';

    var BackLogComponent = `<div class="TaskType" id = "BackLog">Бэклог</div>`;
    var InWorkComponent = `<div class="TaskType" id = "InWork">В работе</div>`;
    var TestingComponent = `<div class="TaskType" id = "Testing">На тестировании</div>`;
    var BucketComponent = `<div class="TaskType" id = "Bucket">Корзина</div>`;

    var components = [BackLogComponent, InWorkComponent, TestingComponent, BucketComponent]

    boardTasks.forEach(function callback(task){

      switch(task.status){
        case "backlog": 
          components[0] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "processing": 
          components[1] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "done": 
          components[2] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "basket": 
          components[3] += `${AddTask(task.id, task.title, task.status)}`
          break;
          
      }  
    })

    components.forEach(component => {
        const newElement = document.createElement('div');
        newElement.className = 'TaskTypeSection';
        newElement.innerHTML = component;

        resultComponent += newElement.outerHTML;
    })
    
    return resultComponent;
}

function AddTask (id, text, type) {
    var component = new CreateTaskComponent({id, title: text, status : type});
    return(`${component.getTemplate()}`)
}

export class CreateTaskTypeSectionComponent {
  getTemplate() {
    return createTaskTypeSectionComponentTemplate();
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