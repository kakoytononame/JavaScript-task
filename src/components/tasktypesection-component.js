import {CreateTaskComponent} from './task-component.js'

const task = new CreateTaskComponent();


function createTaskTypeSectionComponentTemplate() {
    
    var tasks = [
        ['Пинать аналитика', 'Бегать от аналитика', 'Бегать за аналитиком', 'Прятаться от пма'],
        ['Прятаться от пма'],
        ['Положить сервер', 'Удалить прод', 'Уехать из страны'],
        ['Работать', 'Прочитать книгу "Чистый код"', 'Сходить на пары'],
    ];
    
    return AddTaskComponents(tasks);
}

const AddTaskComponents = (tasks) => {

    var resultComponent = '';

    var BackLogComponent = `<div class="TaskType" id = "BackLog">Бэклог</div>`;
    var InWorkComponent = `<div class="TaskType" id = "InWork">В работе</div>`;
    var TestingComponent = `<div class="TaskType" id = "Testing">На тестировании</div>`;
    var BucketComponent = `<div class="TaskType" id = "Bucket">Корзина</div>`;

    var components = [BackLogComponent, InWorkComponent, TestingComponent, BucketComponent]

    tasks.forEach(function callback(task, index){    
        task.forEach(element => {
            components[index] += `${AddTask(element)}`;
        })
    })

    components.forEach(component => {
        const newElement = document.createElement('div');
        newElement.className = 'TaskTypeSection';
        newElement.innerHTML = component;

        resultComponent += newElement.outerHTML;
    })
    
    return resultComponent;
}

const AddTask = (text, taskType) => {
    return(`${task.getTemplate(text, taskType)}`)
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