// import { home } from "./home";
import { html } from "lit-html";
import { header } from "./header";
import { todo_form_content } from "./create_todo";
import { todo_display_content } from "./display_todo";
import { todo_editor_content } from "./create_todo";

const mainContentContainer = html`
  <div id=main_content_container></div>
`;

const content = document.createElement('div');
content.setAttribute('id','content');
content.innerHTML = 
    header.strings[0]+
    mainContentContainer.strings[0];

function generatePage() {
    document.body.appendChild(content);
    document.getElementById('main_content_container').innerHTML = 
        todo_form_content.strings[0]+
        todo_display_content.strings[0]+
        todo_editor_content.strings[0];
};

export { generatePage }
