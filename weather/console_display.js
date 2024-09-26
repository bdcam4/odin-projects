/*
*
* first load
*
*/

function generatePage() {
    const content = document.createElement('div');
    content.setAttribute('id','content');
    document.body.appendChild(content);

    let console_container = document.createElement('div');
    console_container.setAttribute('id','console_container');
    content.appendChild(console_container);

    console_container.innerHTML = 
        console_input_content.strings[0]+
        console_history_content.strings[0]+
        console_display_content.strings[0];
};

/*
*
* console display
*
*/

function generateDisplay(categories) {
    document.getElementById('console_display').innerHTML = '';

    // display categories
    for (const i of Object.keys(categories)) {
        let new_category_line = document.createElement('div');
        new_category_line.classList.add('display_line');
        
        let category_name = document.createElement('div');
        category_name.innerText = `'~/${i}':`;
        category_name.classList.add('consoleBlueText');
        new_category_line.appendChild(category_name);

        let console_size = document.createElement('div');
        console_size.innerText = `total ${Object.keys(categories[i]).length}`;
        new_category_line.appendChild(console_size);

        document.getElementById('console_display').appendChild(new_category_line);
        
        // display todos        
        for (const j of Object.keys(categories[i])){
            let current_todo = categories[i][j];

            let new_todo_line = document.createElement('div');
            new_todo_line.classList.add('display_line');

            let todo_status = document.createElement('div');
            todo_status.innerText = current_todo.status;
            new_todo_line.appendChild(todo_status);
            
            let todo_priority = document.createElement('div');
            todo_priority.innerText = current_todo.priority;
            todo_priority.classList.add('console_priority');
            new_todo_line.appendChild(todo_priority);

            let todo_date = document.createElement('div');
            let date_luxon = DateTime.fromISO(current_todo.date); 
            let date_shortened = date_luxon.toLocaleString(DateTime.DATE_MED);
            todo_date.innerText = date_shortened;
            todo_date.classList.add('console_date');
            new_todo_line.appendChild(todo_date);

            let todo_title = document.createElement('div');
            todo_title.innerText = current_todo.title;
            new_todo_line.appendChild(todo_title);

            let todo_description = document.createElement('div');
            todo_description.innerText = current_todo.description;
            new_todo_line.appendChild(todo_description);

            // new_todo_line.addEventListener('click', function(){
            //     generateEditorDisplay(i,j);
            // })
            document.getElementById('console_display').appendChild(new_todo_line);
        };
    };
};

function displayConsoleHistory(e) {
    let console_history = document.getElementById('console_history');
    console_history.innerHTML = console_path_content.strings[0];

    if (e === false || e === null || e === undefined || e === '') return;
    let history_string = document.createElement('div');
    history_string.innerText = e.string;
    history_string.classList.add('console_gap');
    console_history.appendChild(history_string);
};


/*
*
* html
*
*/

const console_html = {
    console_display_content : `
    <div id='console_display'></div>
    `,
    console_history_content : `
    <div id='console_history'></div>
    `,
    console_input_content : `
    <div id='console_input'>
    <div id='console_path'>
    <div class='consoleGreenText'>todo</div>
    <div> : </div>
    <div class='consoleBlueText'>~/blue</div>
    <div> $ </div>
    </div>
    <input type='text' autofocus id='user_text_input' class='console_gap'></div>
    </div>
    `,
    console_path_content : `
    <div id='console_path'>
    <div class='consoleGreenText'>todo</div>
    <div> : </div>
    <div class='consoleBlueText'>~/blue</div>
    <div> $ </div>
    </div>
    `,
}
