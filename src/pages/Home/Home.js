import { Fragment } from 'react';
import styles from './Home.module.scss';

import CurrentDay from './Components/CurrentDay/CurrentDay';
import CurrentDayInfo from './Components/CurrentDayInfo/CurrentDayInfo';
import Days from './Components/Days/Days';

export default function Home() {

   return (
      <Fragment>
         <section className={styles.currentDayWrapper}>
            <CurrentDay />
            <CurrentDayInfo />
         </section>
         <Days />
      </Fragment>
   );
}