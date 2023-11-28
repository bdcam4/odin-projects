import './style.css';
import { addListeners, todo_form_content } from './create_todo';
import { generateDisplay, todo_display_content } from './display_todo';
import { generatePage } from './firstLoad';

console.log('It works!');

let categories = {
    // 'CATEGORY0': {},
    // 'CATEGORY1': {}
};

generatePage();
generateDisplay();
addListeners();

export { categories }
