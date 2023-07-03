import { html } from "lit-html";

const getCram = () => {
  document.getElementById('main-content-container').innerHTML = cramContent.strings[0];
};

const cramContent = html`

<div class="content-header">
    <div>cram</div>
    <div>Cram</div>
    <div>CRAM</div>
</div>
<div class="content-body">
    <div class="content-item">dango</div>
</div>

`;

export { getCram }
