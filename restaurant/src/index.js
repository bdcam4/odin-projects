import './style.css';
import bananaBread from './furukawa-bakery-banana-bread.png';
import crabBread from './furukawa-bakery-crab-bread.png';
import jellyBread from './furukawa-bakery-jelly-bread.png';
import rainbowBread from './furukawa-bakery-rainbow-bread.png';
import riceBread from './furukawa-bakery-rice-cracker-bread.png';
import squidBread from './furukawa-bakery-squid-bread.png';
import starfishBread from './furukawa-bakery-starfish-bread.png';
import thornBread from './furukawa-bakery-thorn-bread.png';

console.log('It works!');

const addImage = (image) => {
    const newImage = new Image();
    newImage.src = image;
    return newImage
};

const fuck = () => {
    console.log('fuck this, fuck you');
};
// const generateElement = (elementType,__class,content) => {
//     const element = document.createElement(`${elementType}`);
//     element.innerHTML = `${content}`;
//     element.classList.add(`${__class}`);
//     return element
// };

// const createElement = (elementType) => {
//     const element = document.createElement(`${elementType}`);
//     return element
// };

// const addContent = (element,content) => {
//     element.innerHTML = `${content}`;
//     return element
// };

// const addClass = (element,__class) => {
//     element.classList.add(`${__class}`)
// }

// console.log(testFunction('div'));
// console.log(testFunction('ul'));
// console.log(document.getElementsByClassName('site-header'));

// document.body.appendChild(createElement());
// document.body.appendChild(addImage(bananaBread));

// document.body.appendChild(generateElement('div','site-header'));


// const anotherFunction = () => {
//     const parentElement = document.getElementsByClassName('.site-header');
//     const element = generateElement('div','header-logo','furukawa bakery');
//     parentElement.appendChild(element);
// };

// console.log(anotherFunction());
// console.log(document.getElementsByClassName('.site-header'))

// document.getElementsByClassName('.site-header').appendChild(generateElement('div','header-logo','furukawa bakery'));
// document.getElementsByClassName('.site-header').appendChild(generateElement('ul','header-links'));
// document.getElementsByClassName('.header-links').appendChild(generateElement('li','header-link','bakery'));
// document.getElementsByClassName('.header-links').appendChild(generateElement('li','header-link','cram school'));
// document.getElementsByClassName('.header-links').appendChild(generateElement('li','','dango'));
