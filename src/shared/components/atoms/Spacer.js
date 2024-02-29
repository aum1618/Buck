import {View} from 'react-native';
import React from 'react';

export default function Spacer({isHorizontal, size}) {
  const style = isHorizontal ? {width: size} : {height: size};

  return <View style={style} />;
}
