import {createSlice} from '@reduxjs/toolkit';
import {keys} from '../../shared/constants/keys';
import config from '../../shared/constants/config';

const initialState = {
  locale: config.languages.en,
  theme: config.themes.light,
};

const appConfigSlice = createSlice({
  name: keys.appConfig,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.locale = action.payload;
    },
    toggleTheme: state => {
      state.theme =
        state.theme === config.themes.light
          ? config.themes.dark
          : config.themes.light;
    },
  },
});

export const {setLanguage, toggleTheme} = appConfigSlice.actions;
export default appConfigSlice.reducer;
