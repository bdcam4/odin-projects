// import { home } from "./home";
import { html } from "lit-html";
import { header } from "./header";

const mainContentContainer = html`
  <div id=main_content_container></div>
`;

const content = document.createElement('div');
content.setAttribute('id','content');
content.innerHTML = 
    header.strings[0]+
    mainContentContainer.strings[0];

const firstLoad = () => {
    document.body.appendChild(content);
};

export { firstLoad }
