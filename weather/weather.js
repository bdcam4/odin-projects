// import { handleErrors } from "./handleErrors";

const API_KEY = 'adcb342ae14c4ecf89672851243004';
const baseURL = "https://api.weatherapi.com/v1";
const currentWeather = "/current.json";
const forecastWeather = "/forecast.json";
const search = "/search.json";

async function getAutocompleteLocation(location) {
    const response = await fetch(`${baseURL}${search}?key=${API_KEY}&q=${location}`, {mode: 'cors'});
    const data = await response.json();
    // console.log(autocompleteLocation);

    // need to catch non result 
    // eg. xxxx => autocompleteLocation[0] === undefined

    return data
};

async function getCurrentWeather(location) {
    const response = await fetch(`${baseURL}${currentWeather}?key=${API_KEY}&q=${location}`, {mode: 'cors'});
    const data = await response.json();
    // console.log(currentWeather);
    return data
};

async function getWeatherForecast(location) {
    const response = await fetch(`${baseURL}${forecastWeather}?key=${API_KEY}&q=${location}`, {mode: 'cors'});
    const data = await response.json();
    // console.log(weatherForecast);
    return data
};

async function getWeather(e) {
    let userInput = e.target.value;
    console.log(`userInput: ${userInput}`);
    
    let autocomplete = await getAutocompleteLocation(userInput);
    if (autocomplete[0] === false || autocomplete[0] === null || autocomplete[0] === undefined || autocomplete[0] === ''){ return };
    let autocompleteTopResult = autocomplete[0].name.toLowerCase();

    console.log(`topResult: ${autocompleteTopResult}`);
    console.log(typeof autocompleteTopResult);

    let forecast = await getWeatherForecast(autocompleteTopResult);
    console.log(forecast)
};

function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
};

processChange = debounce((e) => {
    let value = e.target.value;
    if (value === false || value === null || value === undefined || value === '') return false;
    getWeather(e)
});

export { processChange }
