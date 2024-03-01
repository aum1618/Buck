import React from 'react';
import Presenter from './Presenter';
import {useSelector} from 'react-redux';
import locales from '../../../shared/locales';
import colors from '../../../shared/theme/colors';

export default function Transactions({navigation}) {
  const currentLanguage = useSelector(state => state.appConfig.locale);
  const text = locales[currentLanguage];
  const currentTheme = useSelector(state => state.appConfig.theme);
  const color = colors[currentTheme];

  return <Presenter color={color} text={text} navigation={navigation} />;
}
