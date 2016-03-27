import axios from 'axios';
const API_KEY = '38bd92bb903dd01c8f550ad8a64ffcd6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //ES6 to add variables to strings

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
