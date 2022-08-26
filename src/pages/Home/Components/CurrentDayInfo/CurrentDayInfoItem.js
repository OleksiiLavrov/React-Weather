import { Fragment } from 'react';
import styles from './CurrentDayInfo.module.scss';
import IdSvgSelector from '../../../../assets/icons/identificators/IdSvgSelector';

export default function CurrentDay(props) {

   const { iconId, name, value } = props.item;

   return (
      <Fragment>
         <div className={styles.item}>
            <p className={styles.id}>
               <IdSvgSelector id={iconId} />
            </p>
            <p className={styles.idName}>{name}</p>
            <p className={styles.idValue}>{value}</p>
         </div>
      </Fragment >
   );
}