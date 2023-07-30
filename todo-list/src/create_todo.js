import { html } from "lit-html";

const createTodoContent = html`

<div id="todo_create_container">
    <input type="text" id="todo_title_input" placeholder="title">
    <input type="date" id='todo_date_input' onchange="handleDateInput(event) "></input>
    <label for="todo_priority_input"></label>
    <select id="todo_priority_input" name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    <input type="text" id="todo_description_input" placeholder="description">
</div>

`;

export { createTodoContent }