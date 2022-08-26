import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducer';
import currentWeatherReducer from '../reducers/currentWeatherReducer';

export default configureStore({
   reducer: {
      theme: themeReducer,
      currentWeather: currentWeatherReducer
   }
});