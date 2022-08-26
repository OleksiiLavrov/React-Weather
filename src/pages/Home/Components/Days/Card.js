import { Fragment } from 'react';
import styles from './Days.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

export default function Card(props) {
   const dayCard = props.day;
   return (
      <Fragment>
         <div className={styles.card}>
            <p className={styles.day}>{dayCard.date}</p>
            <p className={styles.dayInfo}>{dayCard.date}</p>
            <p className={styles.img}>
               <GlobalSvgSelector id={dayCard.day.condition.text} />
            </p>
            <p className={styles.tempDay}>{Math.floor(dayCard.day.maxtemp_c)}°C</p>
            <p className={styles.tempNight}>{Math.floor(dayCard.day.mintemp_c)}°C</p>
            <p className={styles.info}>{dayCard.day.condition.text}</p>
         </div>
      </Fragment >
   );
}