import { html } from "lit-html";
import { DateTime } from "luxon";
import { myCategories } from ".";
import { generateDisplay } from "./display_todo"

const todo_form_content = html`

<div id="todo_form_container">

Category
<div>
    <input type="text" id='category_title_input' name='title' placeholder='title'>
    <input type="submit" id="category_form_submit" value="Submit">
</div>
Todo
<div>
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
        <option value="2">2</option>
    </select>
    <input type="text" id="todo_description_input" placeholder="description">
    <input type="submit" id="todo_form_submit" value="Submit">
</div>

</div>

`;

const todo_editor_content = html`
<div id='todo_editor_container'>
    <div></div>
</div>

`;

class TodoCategory {
    constructor(title, id) {
        this.title = title,
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

function createCategory(e) {
    let title = e.title;
    let id = myCategories.length;
    let newCategory = new TodoCategory(title, id);
    myCategories.push(newCategory);
    console.log(myCategories)
};

function createTodo(e) {
    let title = e.title;
    let date = e.date;
    let priority = e.priority;
    let category = e.category;
    let description = e.description;
    let id = myCategories[category].todoContainer.length;
    let newTodo = new Todo(title, date, priority, description, id);
    myCategories[category].todoContainer.push(newTodo);
    console.log(myCategories)
};

function addListeners() { 
    document.getElementById('todo_form_submit').onclick = (e) => {
        let todo_form_result = processTodoForm(e);
        createTodo(todo_form_result);
        generateDisplay();
    };
    document.getElementById('category_form_submit').onclick = (e) => {
        let category_form_result = processCategoryForm(e);
        createCategory(category_form_result);
        generateDisplay();
    }
};

function processTodoForm() {
    let title = document.getElementById('todo_title_input').value;
    let date_string = document.getElementById('todo_date_input').value;
    let date = DateTime.fromISO(date_string);
    let priority = document.getElementById('todo_priority_input').value;
    let description = document.getElementById('todo_description_input').value;
    let category = document.getElementById('todo_category_input').value;
    return { title, date, priority, category, description }
};

function processCategoryForm() {
    let title = document.getElementById('category_title_input').value;
    return { title }
};

function selectTodoNode(x,y) {
    let currentTodoNode = myCategories[x].todoContainer[y];
    console.log(currentTodoNode)

};

function removeTodo(e) {
    document.getElementById(`${e}`).remove();
};

export { todo_form_content, todo_editor_content, addListeners  }
