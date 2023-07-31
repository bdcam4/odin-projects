import { html } from "lit-html";
import { DateTime } from "luxon";

const todo_form_content = html`

<div id="todo_form_container">

    <form action="#" onsubmit="callSomeFunction()">
            <input type="text" id="todo_title_input" name="title" placeholder="title"><br><br>
            <input type="date" id='todo_date_input' onchange="handleDateInput(event) "></input><br><br>
            <select id="todo_priority_input" name="priority">
                <option value="low">Low priority</option>
                <option value="medium">Medium priority</option>
                <option value="high">High priority</option>
            </select><br><br>
            <input type="text" id="todo_description_input" placeholder="description"><br><br>
            <input type="submit" value="Submit">
    </form>
</div>

`;

class TodoCategory {
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
    let newCategory = new TodoCategory(title, description, id);
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


export { todo_form_content, Todo, TodoCategory, createTodo, createCategory  }
