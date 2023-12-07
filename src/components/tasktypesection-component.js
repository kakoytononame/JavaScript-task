import { CreateTaskComponent } from './task-component.js';
import { TasksService } from '../services/GetTaskService.js';
import { BaseComponent } from './base/BaseComponent.js';
import { DeleteTaskButtonComponent } from './deletetaskbutton-component.js';
import { Status } from '../const.js';
import { EmptyTaskComponent } from './emptyTask.js';
import { render } from '../render.js';
import { CreateTaskBoardComponent } from './taskboard-component.js';
import { rerender } from '../main.js';


const taskService = new TasksService();

function inizHandlers(){
  document.querySelector(".CreateTaskButton").addEventListener(`click`, formSubmitHandler.bind(this));
  document.querySelector(".DeleteTask").addEventListener(`click`, deleteTasksHandler.bind(this));
}

function createTaskTypeSectionComponentTemplate() {
  document.addEventListener("DOMContentLoaded", function() {
    inizHandlers();
    disableDeleteButton();
  });
  
  return AddTaskComponents();
}

function formSubmitHandler(evt) {

  const inputElement = document.querySelector(".NewTaskInput");
  const title = inputElement.value.trim();

  renderAfterAddingTask(title);

  inizHandlers();

  disableDeleteButton();
}

function deleteTasksHandler(evt){

  var boardTasks = [...taskService.getBoardTasks()];

  var tasksForDelete = boardTasks.find(x => x.status == Status.BACKET);

  if(!Array.isArray(tasksForDelete)){
    taskService.remove([tasksForDelete])
  }
  else{
    taskService.remove(tasksForDelete)
  }

  rerender();

  inizHandlers();

  disableDeleteButton();
}

function disableDeleteButton() {
  var boardTasks = [...taskService.getBoardTasks()];
  var tasksForDelete = boardTasks.find(x => x.status == Status.BACKET);
  if (tasksForDelete === undefined) {

    var deleteButton = document.querySelector(".DeleteTask");
    deleteButton.disabled = true;
    deleteButton.style.backgroundColor = "black";
  }
  else{
    var deleteButton = document.querySelector(".DeleteTask");
    deleteButton.disabled = false;
    deleteButton.style.backgroundColor = "rgb(131, 37, 37)";
  }
}


function AddTaskComponents() {


    var boardTasks = [...taskService.getBoardTasks()];

    //disableDeleteButton();

    var resultComponent = '';

    var BackLogComponent = `<div class="TaskType" id = "BackLog">Бэклог</div>`;
    var InWorkComponent = `<div class="TaskType" id = "InWork">В работе</div>`;
    var TestingComponent = `<div class="TaskType" id = "Testing">На тестировании</div>`;
    var BucketComponent = `<div class="TaskType" id = "Bucket">Корзина</div>`;

    var components = [BackLogComponent, InWorkComponent, TestingComponent, BucketComponent]

    var emptyColumns = [];

    boardTasks.forEach(function callback(task){

      switch(task.status){
        case "backlog": 
          components[0] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "inwork": 
          components[1] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "testing": 
          components[2] += `${AddTask(task.id, task.title, task.status)}`
          break;
        case "backet": 
          components[3] += `${AddTask(task.id, task.title, task.status)}`
          break;
          
      }  
    })

    var statuses = Object.values(Status);
    
    for (var i = 0; i< statuses.length; i++){
      let columnIsNotEmpty = boardTasks.find(task => task.status === statuses[i])

      if(!columnIsNotEmpty){
        components[i] += `${AddEmptyTask(boardTasks.length + i, statuses[i])}`
      }
    }
    
    components[3] += `${new DeleteTaskButtonComponent().getTemplate()}`

    components.forEach(component => {
        const newElement = document.createElement('div');
        newElement.className = 'TaskTypeSection';
        newElement.innerHTML = component;

        resultComponent += newElement.outerHTML;
    })
    
    return resultComponent;
}

function renderAfterAddingTask(text){
  taskService.create([{title:text}]);
  rerender();
}

function AddTask (id, text, type) {
    var component = new CreateTaskComponent({id, title: text, status : type});
    return(`${component.getTemplate()}`)
}

function AddEmptyTask(id, status){
  var emptyTask = new EmptyTaskComponent({id, status});
  return(`${emptyTask.getTemplate()}`)
}

export class CreateTaskTypeSectionComponent extends BaseComponent{

  constructor() {
    super();
    

  }

  getTemplate() {
  
    return createTaskTypeSectionComponentTemplate();
  }

}