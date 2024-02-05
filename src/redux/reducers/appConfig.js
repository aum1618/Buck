import {createSlice} from '@reduxjs/toolkit';
import {keys} from '../../shared/constants/keys';
import config from '../../shared/constants/config';

const initialState = {
  locale: config.languages.en,
};

const appConfigSlice = createSlice({
  name: keys.appConfig,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {setLanguage, setTheme} = appConfigSlice.actions;
export default appConfigSlice.reducer;
