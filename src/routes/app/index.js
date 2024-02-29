import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../shared/constants/screens';
import Home from '../../screens/app/home';
import TabNavigator from '../tab';
import Transactions from '../../screens/app/transactions';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'tab'} component={TabNavigator} />
      <Stack.Screen name={screens.home} component={Home} />
      <Stack.Screen name={screens.transactions} component={Transactions} />
    </Stack.Navigator>
  );
}
