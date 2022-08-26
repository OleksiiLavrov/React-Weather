import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '../model/LocalStorage';
import staticWeather from '../data/weather.json';

export const currentWeatherReducer = createSlice({
   name: 'currentWeather',
   initialState: {
      city: LocalStorage.getItem('city') || 'Киев',
      weather: LocalStorage.getItem('weather') || staticWeather,
      days: 7,
   },
   reducers: {
      fetchCurrentWeather: (state, data) => {
         state.city = data.payload.city;
         state.weather = data.payload.weather;
         LocalStorage.setItem('city', state.city);
         LocalStorage.setItem('weather', state.weather);
      },

      showWeatherForecast: (state, data) => {
         state.days = data.payload;
      }
   },
});
export const {
   fetchCurrentWeather,
   showWeatherForecast,
} = currentWeatherReducer.actions;

export const selectCity = state => state.currentWeather.city;
export const selectWeather = state => state.currentWeather.weather;
export const selectDays = state => state.currentWeather.days;

export default currentWeatherReducer.reducer;