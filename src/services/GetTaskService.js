import {tasks} from '../mock/tasks.js';
import { Status } from '../const.js';


export class TasksService {
    #boardTasks = tasks;
  
    getBoardTasks() {

      this.#boardTasks =this.#boardTasks.filter(function( element ) {
        return element !== undefined;
      });

      return this.#boardTasks;
    }

    create(tasks) {
      tasks.forEach(task => {
        task.id = getRandomInt(10000000);
        
        if(this.#boardTasks.includes(task.id)){
          task.id = getRandomInt(10000000);
        }
        
        task.status = Status.BACKLOG;
        
        this.#boardTasks.push(task);
      });
    }
  
    remove(tasks) {
      tasks.forEach(task => {
        delete this.#boardTasks[this.#boardTasks.findIndex(x => x.id == task.id)];
      })
    }
    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}