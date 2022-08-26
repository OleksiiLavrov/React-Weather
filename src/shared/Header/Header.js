import { React, Fragment, useEffect } from 'react';
import styles from './Header.module.scss';
import Select from 'react-select';

import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme, selectTheme } from '../../reducers/themeReducer';
import { fetchCurrentWeather, selectCity } from '../../reducers/currentWeatherReducer';

import { WeatherService } from '../../services/WeatherService';

export default function Header() {

   const city = useSelector(selectCity);
   const theme = useSelector(selectTheme);
   const dispatch = useDispatch();
   const root = document.querySelector(":root");

   const options = [
      { value: 'Kiyiv', label: 'Киев' },
      { value: 'Odesa', label: 'Одесса' },
      { value: 'Kharkiv', label: 'Харьков' },
      { value: 'Lviv', label: 'Львов' },
      { value: 'Poltava', label: 'Полтава' },
   ]

   const colorStyles = {
      control: (styles) => ({
         ...styles,
         backgroundColor: theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
         borderRadius: '10px',
         border: 'none',
         width: '194px',
         height: '37px',
         zIndex: '100',
      }),
      singleValue: (styles) => ({
         ...styles,
         color: theme === 'dark' ? '#fff' : '#000',
      }),
      option: (styles) => ({
         ...styles,
         backgroundColor: '#fff',
         color: '#000',
         ':hover': {
            ...styles[':hover'],
            backgroundColor: theme === 'dark' ? '#4F4F4F' : '#4793FF',
            color: '#fff',
         },
      }),
   }

   const components = [
      'background',
      'components-background',
      'card-background',
      'card-box-shadow',
      'text-color'
   ];

   async function changeCityHandler(event) {
      const weather = await WeatherService.currentWeather(event.value, 7);
      const obj = {
         city: event.label,
         weather: weather,
      }
      dispatch(fetchCurrentWeather(obj));
   }

   function changeCurTheme() {
      dispatch(changeTheme());
   }

   useEffect(() => {
      components.forEach(component =>
         root.style.setProperty(
            `--${component}`,
            `var(--${component}-${theme})`
         )
      );
   });

   return (
      <Fragment>
         <header className={styles.header}>
            <div className={styles.wrapper}>
               <div className={styles.logo}>
                  <GlobalSvgSelector id="header-logo" />
               </div>
               <span className={styles.title}>React weather in {city}</span>
            </div>
            <div className={styles.wrapper}>
               <div className={styles.themeLogo} onClick={changeCurTheme}>
                  <GlobalSvgSelector id="change-theme" />
               </div>
               <Select
                  className={styles.select}
                  styles={colorStyles}
                  options={options}
                  onChange={changeCityHandler}
               />
            </div>
         </header>
      </Fragment >
   );
}