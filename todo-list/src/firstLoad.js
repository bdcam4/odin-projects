// import { home } from "./home";
import { html } from "lit-html";
import { header } from "./header";

const mainContentContainer = html`
  <div id=main-content-container></div>
`;

const content = document.createElement('div');
content.setAttribute('id','content');
content.innerHTML = 
    header.strings[0]+
    mainContentContainer.strings[0];

const firstLoad = () => {
    document.body.appendChild(content);
    // document.getElementById('main-content-container').innerHTML = home.strings[0];
};

export { firstLoad }
