import { html } from "lit-html";
import { DateTime } from "luxon";
import { myCategories } from ".";
import { generateTodoDisplay } from "./display_todo"

const todo_form_content = html`

<div id="todo_form_container">

            <input type="text" id='todo_title_input' name='title' placeholder='title'>
            <input type="date" id='todo_date_input'></input>
            <select id="todo_priority_input" name="priority">
                <option value="low">Low priority</option>
                <option value="medium">Medium priority</option>
                <option value="high">High priority</option>
            </select>
            <select id="todo_category_input" name="category">
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
            <input type="text" id="todo_description_input" placeholder="description">
            <input type="submit" id="todo_form_submit" value="Submit">

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
    constructor(title, date, priority, description, id) {
        this.title = title,
        this.date = date,
        this.priority = priority,
        this.description = description,
        this.id = id,
        this.status = false
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

const createTodo = (e) => {
    let title = e.title;
    let date = e.date;
    let priority = e.priority;
    let category = e.category;
    let description = e.description;
    let id = myCategories[category].todoContainer.length;
    let newTodo = new Todo(title, date, priority, description, id);
    myCategories[category].todoContainer.push(newTodo);
    console.log(myCategories);
};

const addListeners = () => { 
    document.getElementById('todo_form_submit').onclick = (e) => {
        let form_result = handleFormInput(e);
        createTodo(form_result);
        generateTodoDisplay();
    }
};

const handleFormInput = () => {
    let title = document.getElementById('todo_title_input').value;
    let date_string = document.getElementById('todo_date_input').value;
    let date = DateTime.fromISO(date_string);
    let priority = document.getElementById('todo_priority_input').value;
    let description = document.getElementById('todo_description_input').value;
    let category = document.getElementById('todo_category_input').value;
    return { title, date, priority, category, description }
}

export { todo_form_content, addListeners  }
