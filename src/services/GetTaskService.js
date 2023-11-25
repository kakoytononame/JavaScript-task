import {tasks} from '../mock/tasks.js';

export class TasksService {
    #boardTasks = tasks;
  
    getBoardTasks() {
      return this.#boardTasks;
    }
  }