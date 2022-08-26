import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import styles from './CurrentDayInfo.module.scss';
import cloudPng from '../../../../assets/images/cloud.png';

import { selectWeather } from '../../../../reducers/currentWeatherReducer';
import { WeatherConverter } from '../../../../model/WeatherConverter';
import CurrentDayInfoItem from './CurrentDayInfoItem';


export default function CurrentDayInfo() {
   const weather = useSelector(selectWeather);

   const items = [
      {
         iconId: 'temp',
         name: 'Температура',
         value: `${Math.floor(weather.current.temp_c)}°С - ощущается как ${Math.floor(weather.current.feelslike_c)}°С`,
      },
      {
         iconId: 'humidity',
         name: 'Влажность',
         value: `${Math.floor(weather.current.humidity)} % - ${WeatherConverter.convertWeatherFeel('humidity', Math.floor(weather.current.humidity))}`,
      },
      {
         iconId: 'pressure',
         name: 'Давление',
         value: `${Math.floor(WeatherConverter.convertUnits(weather.current.pressure_mb))} мм ртутного стоба - ${WeatherConverter.convertWeatherFeel('pressure', Math.floor(WeatherConverter.convertUnits(weather.current.pressure_mb)))}`,
      },
      {
         iconId: 'wind',
         name: 'Ветер',
         value: `${Math.floor(weather.current.wind_kph)} км/ч ${WeatherConverter.convertWindDirection(Math.floor(weather.current.wind_degree))} - ${WeatherConverter.convertWeatherFeel('wind', Math.floor(weather.current.wind_kph))}`,
      },
   ];

   return (
      <Fragment>
         <div className={styles.currentDayInfo}>
            <div className={styles.items}>
               {items.map(item =>
                  <CurrentDayInfoItem key={item.iconId} item={item} />
               )}
            </div>
            <img className={styles.cloudImg} src={cloudPng} alt="Облако" />
         </div>
      </Fragment >
   );
}