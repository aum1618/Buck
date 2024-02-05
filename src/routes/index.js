import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app';
import AuthNavigator from './auth';

export default function Navigator() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
