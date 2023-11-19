import './style.css';
import { addListeners, todo_form_content } from './create_todo';
import { generateTodoDisplay, todo_display_content } from './display_todo';
import { generatePage } from './firstLoad';

console.log('It works!');

let myCategories = [
    {
        'title':        '_CATEGORY_',
        'description':  'description0',
        'id':           0,
        'todoContainer': []
    },
    {
        'title':        '_CATEGORY_',
        'description':  'description1',
        'id':           1,
        'todoContainer': []
    }
];

generatePage();
generateTodoDisplay();
addListeners();

export { myCategories }
