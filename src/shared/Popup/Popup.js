import { Fragment } from 'react';
import styles from './Popup.module.scss';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import CurrentDayInfoItem from '../../pages/Home/Components/CurrentDayInfo/CurrentDayInfoItem';


export default function Popup() {
   const items = [
      {
         iconId: 'temp',
         name: 'Температура',
         value: '20° - ощущается как 17°',
      },
      {
         iconId: 'pressure',
         name: 'Давление',
         value: '765 мм ртутного столба - нормальное',
      },
      {
         iconId: 'precipitation',
         name: 'Осадки',
         value: 'Без осадков',
      },
      {
         iconId: 'wind',
         name: 'Ветер',
         value: '3 м/с юго-запад - легкий ветер',
      },
   ];
   return (
      <Fragment>
         <section className={styles.popup}>
            <div className={styles.day}>
               <p className={styles.dayTemp}>20°</p>
               <p className={styles.dayName}>Сегодня</p>
               <p className={styles.dayImg}>
                  <GlobalSvgSelector id="sun" />
               </p>
               <p className={styles.time}>
                  Время: <span>21:54</span>
               </p>
               <p className={styles.location}>
                  Город: <span>Киев</span>
               </p>
            </div>
            <div className={styles.items}>
               {items.map(item =>
                  <CurrentDayInfoItem key={item.iconId} item={item} />
               )}
            </div>
            <div className={styles.close}>
               <GlobalSvgSelector id="close" />
            </div>
         </section>
         <div className={styles.blur}></div>
      </Fragment >
   );
}