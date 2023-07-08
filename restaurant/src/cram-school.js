import { addImage } from './addImage';
import cramSchoolIMG from './cram-school.png';
import { html } from "lit-html";

const getCram = () => {
  document.getElementById('main-content-container').innerHTML = cramContent.strings[0];
  document.getElementById('content-body').appendChild(addImage(cramSchoolIMG,'cram-school-image'));
};

const cramContent = html`

<div class="content-header">
    <div>Sanae's Cram School !!!</div>
</div>
<div id="content-body" class="cram-school">
</div>

`;

export { getCram }
