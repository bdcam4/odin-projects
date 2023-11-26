import { html } from "lit-html";
import { myCategories } from './index';

const todo_display_content = html`

<div id="todo_display_container"></div>

`;

function generateDisplay() {
    document.getElementById('todo_display_container').innerHTML = "";
    for (const n of myCategories) {
        let currentCategory = document.createElement('div');
        currentCategory.innerText = 
        n.id+
        "_"+
        n.title;
       
        n.todoContainer.forEach(e => {
        let newTodoDisplayNode = document.createElement('div');
        newTodoDisplayNode.classList.add('todo_node');
        newTodoDisplayNode.innerText += e.title
        newTodoDisplayNode.setAttribute('id',`${n.id}-${e.id}`);
        newTodoDisplayNode.setAttribute('onclick',`selectTodoNode(${n.id},${e.id})`);
        currentCategory.appendChild(newTodoDisplayNode)
        });

        currentCategory.classList.add('todo_display_grid');
        document.getElementById('todo_display_container').appendChild(currentCategory)
    }
}

export { todo_display_content, generateDisplay }
