import { html } from "lit-html";
import { DateTime } from "luxon";
import { categories } from ".";
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

class Todo {
    constructor(title, date, priority, description) {
        this.title = title,
        this.date = date,
        this.priority = priority,
        this.description = description,
        this.status = false
    }
};

function createCategory(e) {
    let title = e.title;
    if (categories[title]) return;
    categories[title] = {};
    updateCategories('todo_category_input');
};

function createTodo(e) {
    let title = e.title;
    let date = e.date;
    let priority = e.priority;
    let category = e.category;
    let description = e.description;
    let newTodo = new Todo(title, date, priority, description);

    categories[category][title] = newTodo;
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

function processEditorForm() {    
    let title = document.getElementById('editor_title_input').value;
    let date_string = document.getElementById('editor_date_input').value;
    let date = DateTime.fromISO(date_string);
    let priority = document.getElementById('editor_priority_input').value;
    let description = document.getElementById('editor_description_input').value;
    let category = document.getElementById('editor_category_input').value;

    if (title === null || title === undefined || title.length === 0) {
        title = document.getElementById('editor_title_input').placeholder;
    };

    if (date_string === null || date_string === undefined || date_string.length === 0) {
        date_string = document.getElementById('editor_date_input').placeholder;
        date = DateTime.fromISO(date_string)
    };

    if (description === null || description === undefined || description.length === 0) {
        description = document.getElementById('editor_description_input').placeholder;
    };

    return { title, date, priority, category, description }
};

function selectTodoNode(x,y) {
    return {
        category: categories[x],
        category_name: x,
        todo: categories[x][y],
        todo_name: y
    }
};

function updateCategories(e) {
    let list_of_categories = document.getElementById(`${e}`);
    list_of_categories.innerHTML = '';
    for (const key of Object.keys(categories)) {
        let current_category = document.createElement('option');
        current_category.innerText = key.toString();
        current_category.value = key.toString();
        list_of_categories.appendChild(current_category)        
    }
};

function editTodoNode(e) {
    delete categories[e.category_name][e.todo_name];
    let editor_form_result = processEditorForm(e);
    createTodo(editor_form_result);
    generateDisplay();
    document.getElementById('todo_editor_container').innerHTML = '';
};

function deleteTodoNode(e) {
    delete categories[e.category_name][e.todo_name];
    generateDisplay();
    document.getElementById('todo_editor_container').innerHTML = '';
};

export { todo_form_content, todo_editor_content, addListeners, updateCategories, selectTodoNode, editTodoNode, deleteTodoNode }
