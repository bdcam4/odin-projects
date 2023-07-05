import { html } from "lit-html";
import bananaBread from './furukawa-bakery-banana-bread.png';
import crabBread from './furukawa-bakery-crab-bread.png';
import jellyBread from './furukawa-bakery-jelly-bread.png';
import rainbowBread from './furukawa-bakery-rainbow-bread.png';
import riceBread from './furukawa-bakery-rice-cracker-bread.png';
import squidBread from './furukawa-bakery-squid-bread.png';
import thornBread from './furukawa-bakery-thorn-bread.png';
import { addImage } from "./addImage";



const menu = {
  breakfast: [bananaBread, jellyBread],
  lunch: [rainbowBread, riceBread, thornBread],
  dinner: [crabBread, squidBread]
};



const getBread = () => {
  document.getElementById('main-content-container').innerHTML = breadContent.strings[0];
  document.getElementById('content-body').appendChild(addImage(bananaBread));
  document.getElementById('breakfast').addEventListener('click', getBreakfastMenu);
  document.getElementById('lunch').addEventListener('click', getLunchMenu);
  document.getElementById('dinner').addEventListener('click', getDinnerMenu);
};




const getBreakfastMenu = () => {
  document.getElementById('content-body').innerHTML = '';
  for (const n in menu.breakfast) {
      document.getElementById('content-body').appendChild(addImage(menu.breakfast[n]));
    };
}

const getLunchMenu = () => {
  document.getElementById('content-body').innerHTML = '';
  for (const n in menu.lunch) {
      document.getElementById('content-body').appendChild(addImage(menu.lunch[n]));
    };
}

const getDinnerMenu = () => {
  document.getElementById('content-body').innerHTML = '';
  for (const n in menu.dinner) {
      document.getElementById('content-body').appendChild(addImage(menu.dinner[n]));
    };
}

const breadContent = html`

<div class="content-header">
  <div id="breakfast">breakfast</div>
  <div id="lunch">lunch</div>
  <div id="dinner">dinner</div>
</div>
<div id="content-body">
</div>

`;


export { getBread }
