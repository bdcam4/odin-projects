import { html } from "lit-html";
import { categories } from './index';

const todo_display_content = html`

<div id="todo_display_container"></div>

`;

function generateDisplay() {
    document.getElementById('todo_display_container').innerHTML = '';
    for (const i of Object.keys(categories)) {
        let currentCategory = document.createElement('div');
        currentCategory.innerText = i;
        
        for (const j of Object.keys(categories[i])){
        let newTodoDisplayNode = document.createElement('div');
        newTodoDisplayNode.classList.add('todo_node');
        newTodoDisplayNode.innerText += j;
        newTodoDisplayNode.setAttribute('id',`${i}-${j}`);
        newTodoDisplayNode.setAttribute('onclick',`selectTodoNode(${i},${j})`);
        currentCategory.appendChild(newTodoDisplayNode)
        };

        currentCategory.classList.add('todo_display_grid');
        document.getElementById('todo_display_container').appendChild(currentCategory)
    }
}
export { todo_display_content, generateDisplay }
