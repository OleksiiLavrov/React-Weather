import { createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '../model/LocalStorage';

export const themeReducer = createSlice({
   name: 'theme',
   initialState: {
      theme: LocalStorage.getItem('theme') || 'light',
   },
   reducers: {
      changeTheme: state => {
         if (state.theme === 'light') {
            state.theme = 'dark';
         } else {
            state.theme = 'light';
         }
         LocalStorage.setItem('theme', state.theme);
      }
   },
});

export const { changeTheme } = themeReducer.actions;
export const selectTheme = state => state.theme.theme;

export default themeReducer.reducer;