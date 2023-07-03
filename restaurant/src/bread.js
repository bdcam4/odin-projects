import { html } from "lit-html";
import bananaBread from './furukawa-bakery-banana-bread.png';
import crabBread from './furukawa-bakery-crab-bread.png';
import jellyBread from './furukawa-bakery-jelly-bread.png';
import rainbowBread from './furukawa-bakery-rainbow-bread.png';
import riceBread from './furukawa-bakery-rice-cracker-bread.png';
import squidBread from './furukawa-bakery-squid-bread.png';
import starfishBread from './furukawa-bakery-starfish-bread.png';
import thornBread from './furukawa-bakery-thorn-bread.png';

const getBread = () => {
  document.getElementById('main-content-container').innerHTML = breadContent.strings[0];
};

const breadContent = html`

<div class="content-header">
  <div class="breakfast">breakfast</div>
  <div class="lunch">lunch</div>
  <div class="dinner">dinner</div>
</div>
<div class="content-body">
  <div class="content-item">item1</div>
  <div class="content-item">item2</div>
  <div class="content-item">item3</div>
  <div class="content-item">item4</div>
</div>

`;

// const addImage = (image) => {
//     const newImage = new Image();
//     newImage.src = image;
//     return newImage
// };

export { getBread }
