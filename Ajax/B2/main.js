const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '&appid=d151dc8127a189b8a2a42dbe47b67a79';
var city_name = '';

var input = document.querySelector('.input');
var button = document.querySelector('.button');

var Humidity = document.querySelector('.humidity');
var Feels_like = document.querySelector('.feels_like');
var Temp = document.querySelector('.temp');
var Temp_max = document.querySelector('.temp_max');
var Temp_min = document.querySelector('.temp_min');
var Clouds = document.querySelector('.clouds');
var Wind = document.querySelector('.wind');



button.onclick = () => {
    city_name = input.value;
    console.log(city_name);
    axios.get(url+city_name+api_key)
    .then(response => {
        console.log(response);
        const {data: {main: {feels_like, humidity, temp, temp_max, temp_min}}} = response;
        const {data: {wind: {speed}}} = response;
        const {data: {clouds: {all}}} = response;
        Humidity.textContent = humidity;
        Feels_like.textContent = Math.round((feels_like-273));
        Temp.textContent = Math.round((temp-273));
        Temp_max.textContent = Math.round((temp_max-273));
        Temp_min.textContent = Math.round((temp_min-273));
        Clouds.textContent = all;
        Wind.textContent = speed;
    })
    .catch(e => {
        const {response: {data: {cod}}} = e;
        console.log(cod);
    })
}

