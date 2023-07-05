import './style.css';
import { getBread } from './bread';
import { getDango } from './dango';
import { getCram } from './cram-school';
import { firstLoad } from './firstLoad';

console.log('It works!');
firstLoad();

document.getElementById('logo').addEventListener('click', firstLoad);
document.getElementById('bread').addEventListener('click', getBread);
document.getElementById('cram-school').addEventListener('click', getCram);
document.getElementById('dango').addEventListener('click', getDango)
