import { DateTime } from "luxon";
import { firstLoad } from './firstLoad';
import { createTodoContent } from './create_todo';

console.log('It works!');
firstLoad();


const myCategories = [];

class todoCategory {
    constructor(title, description, id) {
        this.title = title,
        this.description = description,
        this.id = id,
        this.todoContainer = []
    }
};

class Todo {
    constructor(title, dueDate, priority, description, id) {
        this.title = title,
        this.dueDate = DateTime.fromISO(dueDate),
        this.priority = priority,
        this.description = description,
        this.status = false,
        this.id = id
    }
};

// Todo.prototype.info = function(){
//     return `some string`
// };

const createCategory = () => {
    let title = 'title';
    let description = 'description';
    let id = myCategories.length;
    let newCategory = new todoCategory(title, description, id);
    myCategories.push(newCategory)
};

const createTodo = (categoryId) => {
    let title = document.getElementById('todo_title_input').value;
    let dueDate = document.getElementById('todo_date_input').value;
    let priority = document.getElementById('todo_priority_input').value;
    let description = document.getElementById('todo_description_input').value;
    let id = myCategories[categoryId].todoContainer.length;
    let newTodo = new Todo(title, dueDate, priority, description, id);
    myCategories[categoryId].todoContainer.push(newTodo)
};

// createCategory();
// createTodo(0);
// console.log(myCategories[0]);

// const handleDateInput = (event) => {
//     console.log(event.target.value);
// };

// const  dateInputHTML = `<input type="date" id='todo_date_input' onchange="handleDateInput(event) "></input>`;

// const content = document.createElement('div');
// content.setAttribute('id','content');
// content.innerHTML = dateInputHTML;


// document.body.appendChild(content);

// const tempFunction = () => {
//     console.log(document.getElementById('todo_date_input').value)
// }

document.getElementById('main-content-container').innerHTML = createTodoContent.strings[0];
