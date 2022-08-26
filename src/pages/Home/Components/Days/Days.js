import { Fragment } from 'react';
import styles from './Days.module.scss';
import weather from '../../../../data/weather.json'

import { selectDays } from '../../../../reducers/currentWeatherReducer';
import { useSelector } from 'react-redux';

import Card from './Card';
import Tabs from './Tabs';


export default function Days() {
   const days = useSelector(selectDays);
   const weatherForecast = weather.forecast.forecastday;
   const daysArr = [];

   for (let i = 0; i < days; i++) {
      daysArr.push(weatherForecast[i]);
   }

   // const days = [
   //    {
   //       day: 'Сегодня',
   //       day_info: '28 авг',
   //       icon_id: 'Sunny',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'Облачно',
   //    },
   //    {
   //       day: 'Завтра',
   //       day_info: '29 авг',
   //       icon_id: 'Patchy rain possible',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'небольшой дождь и солнце',
   //    },
   //    {
   //       day: 'Ср',
   //       day_info: '30 авг',
   //       icon_id: 'Heavy rain',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'небольшой дождь',
   //    },
   //    {
   //       day: 'Чт',
   //       day_info: '31 авг',
   //       icon_id: 'Cloudy',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'Облачно',
   //    },
   //    {
   //       day: 'Пт',
   //       day_info: '1 сен',
   //       icon_id: 'Heavy rain',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'Облачно',
   //    },
   //    {
   //       day: 'Сб',
   //       day_info: '2 сен',
   //       icon_id: 'Sunny',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'Облачно',
   //    },
   //    {
   //       day: 'Вс',
   //       day_info: '3 сен',
   //       icon_id: 'Partly cloudy',
   //       temp_day: '+18',
   //       temp_night: '+15',
   //       info: 'Облачно',
   //    },
   // ];

   return (
      <Fragment>
         <Tabs />
         <div className={styles.days}>
            {daysArr.map(day => <Card key={day.date} day={day} />)}
         </div>
      </Fragment >
   );
}