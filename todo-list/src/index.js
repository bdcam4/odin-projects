import './style.css';

import { firstLoad } from './firstLoad';
import { addListeners, todo_form_content } from './create_todo';
import { generateCategoryGrid, todo_display_content } from './display_todo';


console.log('It works!');
firstLoad();

let myCategories = [
    {
        'title':        'title0',
        'description':  'description0',
        'id':           0,
        'todoContainer': []
    }
];

document.getElementById('main_content_container').innerHTML = 
todo_form_content.strings[0]+
todo_display_content.strings[0];

addListeners();

generateCategoryGrid();


export { myCategories }
