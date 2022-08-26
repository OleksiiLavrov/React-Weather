import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './CurrentDay.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { selectWeather, selectCity } from '../../../../reducers/currentWeatherReducer';

export default function CurrentDay() {
   const city = useSelector(selectCity);
   const weather = useSelector(selectWeather);
   const [dateNow, setDate] = useState(getTime());

   function getTime() {
      let date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
      return { hours, minutes }
   }

   useEffect(() => {
      setInterval(() => {
         setDate(getTime())
      }, 1000)

   }, [])

   return (
      <Fragment>
         <div className={styles.currentDay}>
            <div className={styles.topBlock}>
               <div className={styles.topBlockWrapper}>
                  <p className={styles.temp}>{Math.floor(weather.current.temp_c)}°</p>
                  <p className={styles.dayName}>Сегодня</p>
               </div>
               <GlobalSvgSelector id={weather.current.condition.text} />
            </div>
            <div className={styles.bottomBlock}>
               <p className={styles.time}>
                  Время: <span>{dateNow.hours + ':' + dateNow.minutes}</span>
               </p>
               <p className={styles.location}>
                  Город: <span>{city}</span>
               </p>
            </div>
         </div>
      </Fragment >
   );
}