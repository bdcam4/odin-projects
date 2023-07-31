import './style.css';

import { firstLoad } from './firstLoad';
import { todo_form_content } from './create_todo';
import { generateCategoryGrid, todo_display_content } from './display_todo';


console.log('It works!');
firstLoad();

const myCategories = [
    {
        'title':        'title_0',
        'description':  'desc_0',
        'id':           'CATEGORY_id_0',
        'todoContainer': [
            {
            'title':        'TODO_title_0',
            'description':  'TODO_description_0',
            'id':           'TODO_id_0',
            'priority':     'TODO_priority_low',
            'status':       false
            },
            {
            'title':        'TODO_title_1',
            'description':  'TODO_description_1',
            'id':           'TODO_id_1',
            'priority':     'TODO_priority_high',
            'status':       false
            },

        ],
    },
    {
        'title':        'title_1',
        'description':  'description_1',
        'id':           'CATEGORY_id_1',
        'todoContainer': [],
    },

];

document.getElementById('main_content_container').innerHTML = 
todo_form_content.strings[0]+
todo_display_content.strings[0];

generateCategoryGrid();


export { myCategories }
