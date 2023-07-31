import { html } from "lit-html";
import { myCategories } from './index';

const todo_display_content = html`

<div id="todo_display_container"></div>

`;

const generateCategoryGrid = () => {
    for (const n of myCategories) {
        let currentCategory = document.createElement('div');
        currentCategory.innerText = 
        n.id+
        n.title+
        n.description;
        
        let currentTodos = document.createElement('div');
        n.todoContainer.forEach(e => currentTodos.innerText += e.title);

        currentCategory.classList.add('todo_display_grid');
        currentCategory.appendChild(currentTodos);
        document.getElementById('todo_display_container').appendChild(currentCategory)
    }
}


export { todo_display_content, generateCategoryGrid }
