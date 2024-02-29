/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const Circle = ({position, color, size, children}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        opacity: 0.3,
        borderRadius: 999,
        backgroundColor: color,
        position: 'absolute',
        ...position,
      }}>
      {children}
    </View>
  );
};
