import './style.css';
import { addListeners, todo_form_content } from './create_todo';
import { generateDisplay, todo_display_content } from './display_todo';
import { generatePage } from './firstLoad';

console.log('It works!');

let myCategories = [
    {
        'title':        'CATEGORY',
        'id':           0,
        'todoContainer': []
    },
    {
        'title':        'CATEGORY',
        'id':           1,
        'todoContainer': []
    }
];

generatePage();
generateDisplay();
addListeners();

export { myCategories }
