import { html } from "lit-html";

const getDango = () => {
  document.getElementById('main-content-container').innerHTML = dangoContent.strings[0];
};

const dangoContent = html`

<div class="content-header">
    <div>dango</div>
    <div>Dango</div>
    <div>DANGO</div>
</div>
    <div class="content-body">
    <div class="content-item">dango</div>
<div>

`;

export { getDango }
