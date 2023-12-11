import { html } from "lit-html";
import { categories } from './index';
import { selectTodoNode, updateCategories } from './create_todo';

const todo_display_content = html`

<div id="todo_display_container"></div>

`;

//<div id="todo_form_container">

const todo_editor_content = html`

<div id="editor_todo_form">
    Todo Editor
    <input type="text" id='editor_title_input' name='title' placeholder='title'>
    <input type="date" id='editor_date_input'></input>
    <select id="editor_priority_input" name="priority">
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
    </select>
    <select id="editor_category_input" name="category">
    </select>
    <input type="text" id="editor_description_input" placeholder="description">
    <input type="submit" id="editor_form_submit" value="Submit">
</div>

</div>

`;

function generateDisplay() {
    document.getElementById('todo_display_container').innerHTML = '';
    for (const i of Object.keys(categories)) {
        let currentCategory = document.createElement('div');
        currentCategory.innerText = i;
        
        currentCategory.classList.add('todo_display_grid');
        document.getElementById('todo_display_container').appendChild(currentCategory);

        for (const j of Object.keys(categories[i])){
            let newTodoDisplayNode = document.createElement('div');
            newTodoDisplayNode.classList.add('todo_node');
            newTodoDisplayNode.innerText += j;
            newTodoDisplayNode.setAttribute('id',`${i}-${j}`);
            currentCategory.appendChild(newTodoDisplayNode);

            document.getElementById(`${i}-${j}`).addEventListener("click", function(){
                console.log(`listener triggered on ${i}-${j}`);
                generateEditorDisplay(i,j)
            });
        };
    };
};

function generateEditorDisplay(x,y) {
    let currentEditorNode = selectTodoNode(x,y);
    console.log(currentEditorNode);

    document.getElementById('todo_editor_container').innerHTML = todo_editor_content.strings[0];

    updateCategories('editor_category_input');


    // for (const key of Object.keys(categories)) {
    //     let current_category = document.createElement('option');
    //     current_category.innerText = key.toString();
    //     current_category.value = key.toString();
    //     list_of_categories.appendChild(current_category)        
    // }

    
}

export { todo_display_content, generateDisplay }
