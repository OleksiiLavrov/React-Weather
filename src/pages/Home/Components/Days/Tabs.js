import { Fragment } from 'react';
import styles from './Days.module.scss';
import { useDispatch } from 'react-redux';
import { showWeatherForecast, selectDays } from '../../../../reducers/currentWeatherReducer';
import { useSelector } from 'react-redux';

export default function Tabs() {
   const dispatch = useDispatch();
   const days = useSelector(selectDays);
   const tabs = [
      {
         text: 'На неделю',
         value: 7,
      },
      {
         text: 'На 10 дней',
         value: 10,
      },
   ]

   function showMoreDays(event) {
      dispatch(showWeatherForecast(event.target.value));
   }

   function showLessDays() {
      dispatch(showWeatherForecast(7));
   }

   return (
      <Fragment>
         <div className={styles.tabsWrapper}>
            <ul className={styles.tabsList}>
               {tabs.map(tab =>
                  <li
                     key={tab.value + 'days'}
                     className={tab.value === days ? `${styles.tab} ${styles.tab_active}` : styles.tab}
                     value={tab.value}
                     onClick={showMoreDays}
                  >{tab.text}</li>
               )}
            </ul>
            <div className={styles.cancel} onClick={showLessDays}>Отменить</div>
         </div>
      </Fragment >
   );
}