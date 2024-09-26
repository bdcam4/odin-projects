import { processChange } from "./weather";

const content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);

let console_container = document.createElement('div');
console_container.setAttribute('id','console_container');
content.appendChild(console_container);

console_container.innerHTML = 
console_input_content+
console_history_content+
console_display_content;

const searchUserInput = document.getElementById("search-input-textbox");
searchUserInput.addEventListener("input", processChange);

    // <div id="container">
    //     <input id="search-input-textbox" type="text" placeholder="location">
    // </div>
