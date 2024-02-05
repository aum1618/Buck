import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

// Wrapper component for all the screens
const Wrapper = ({children, style}) => {
  return (
    <Background style={style}>
      <SafeArea>{children}</SafeArea>
    </Background>
  );
};

// Background component for the app
export const Background = ({children, style}) => {
  return <View style={[styles.background, style]}>{children}</View>;
};

// SafeArea component ensuring content avoids system status bar
export const SafeArea = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
  );
};

const styles = {
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
};

// Export the Wrapper component as the default export
export default Wrapper;
