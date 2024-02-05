import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Accounts from '../../screens/auth/accounts';
import {screens} from '../../shared/constants/screens';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.accounts} component={Accounts} />
    </Stack.Navigator>
  );
}
