import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../shared/constants/screens';
import Home from '../../screens/app/home';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.home} component={Home} />
    </Stack.Navigator>
  );
}
