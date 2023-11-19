import { html } from "lit-html";
import { myCategories } from './index';

const todo_display_content = html`

<div id="todo_display_container"></div>

`;

const generateTodoDisplay = () => {
    document.getElementById('todo_display_container').innerHTML = todo_display_content.strings[0];
    for (const n of myCategories) {
        let currentCategory = document.createElement('div');
        currentCategory.innerText = 
        n.id+
        n.title+
        n.description;
       
        n.todoContainer.forEach(e => {
        let newTodoDisplayNode = document.createElement('div');
        newTodoDisplayNode.classList.add('todo_node');
        newTodoDisplayNode.innerText += e.title
        currentCategory.appendChild(newTodoDisplayNode);
        });

        currentCategory.classList.add('todo_display_grid');
        document.getElementById('todo_display_container').appendChild(currentCategory)
    }
}


export { todo_display_content, generateTodoDisplay }
