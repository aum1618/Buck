import React from 'react';
import Presenter from './Presenter';
import {useSelector} from 'react-redux';
import locales from '../../../shared/locales';
import colors from '../../../shared/theme/colors';

export default function Home() {
  const currentLanguage = useSelector(state => state.appConfig.locale);
  const currentTheme = useSelector(state => state.appConfig.theme);
  const text = locales[currentLanguage];
  const color = colors[currentTheme];

  return <Presenter color={color} />;
}
