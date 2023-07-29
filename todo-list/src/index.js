import { DateTime } from "luxon";

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
    constructor(title, dueDate, priority, status, id) {
        this.title = title,
        this.dueDate = dueDate,
        // this.dueDate = DateTime.fromISO('user input date'),
        this.priority = priority,
        this.status = status,
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
    let title = 'title';
    let dueDate = 'dueDate';
    let priority = 'priority';
    let status = 'status';
    let id = myCategories[categoryId].todoContainer.length;
    // let status = document.querySelector('input[name="status"]:checked').value;
    let newTodo = new Todo(title, dueDate, priority, status, id);
    myCategories[categoryId].todoContainer.push(newTodo)
};

createCategory();
createTodo(0)
console.log(myCategories[0])



// function handleChange(event){
//     // here you can do whatever you want with the value of the input
//     alert(event.target.value)
//   }
  
//   <input type="date" id='todo_date_input' onchange="handleChange(event)"></input>

