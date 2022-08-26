import axios from 'axios';

const apiKey = '7f89a4bdae044811941113450222903';
const url = 'https://api.weatherapi.com/v1/forecast.json';
export const WeatherService = {
   currentWeather: async (city, days) => {
      const responseCurrentWeather = await axios.get(`${url}?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`);
      return responseCurrentWeather.data;
   }
}
