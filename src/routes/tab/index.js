/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image} from 'react-native';
import Home from '../../screens/app/home';
import typography from '../../shared/theme/typography';
import colors from '../../shared/theme/colors';
import SIZES from '../../shared/theme/sizes';
import {iconPaths} from '../../shared/constants/paths';
import Profile from '../../screens/app/profile';
import Statistics from '../../screens/app/Statistics';
import Wallet from '../../screens/app/wallet';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import locales from '../../shared/locales';
import {screens} from '../../shared/constants/screens';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  const currentTheme = useSelector(state => state.appConfig.theme);
  const colour = colors[currentTheme];
  const currentLanguage = useSelector(state => state.appConfig.locale);
  const text = locales[currentLanguage];
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        tabBarActiveTintColor: colors.light.secondary,
        tabBarInactiveTintColor: colors.light.placeholder,
        tabBarStyle: {
          height: SIZES.SCALE_60,
          backgroundColor: colour.background,
          elevation: 14,
        },
        tabBarIndicatorStyle: {
          top: 0,
          backgroundColor: colour.secondary,
        },
        swipable: false,
        tabBarLabelStyle: {
          fontFamily: typography.bold,
          fontSize: typography.FONT_SIZE_12,
          paddingBottom: SIZES.SCALE_14,
          elevation: 14,
        },
      }}>
      <Tab.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarLabel: text.home,
          tabBarIcon: ({focused, color}) => {
            return (
              <TabIcon
                color={color}
                path={!focused ? iconPaths.home : iconPaths.homeFilled}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screens.wallet}
        component={Wallet}
        options={{
          tabBarLabel: text.wallet,
          tabBarIcon: ({focused, color}) => {
            return (
              <TabIcon
                color={color}
                path={!focused ? iconPaths.wallet : iconPaths.walletFilled}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="NewTransaction"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: FloatingButton,
        }}
      /> */}
      <Tab.Screen
        name={screens.statistics}
        component={Statistics}
        options={{
          tabBarLabel: text.statistics,

          tabBarIcon: ({focused, color}) => {
            return (
              <TabIcon
                color={color}
                path={!focused ? iconPaths.graph : iconPaths.graphFilled}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={screens.profile}
        component={Profile}
        options={{
          tabBarLabel: text.profile,
          tabBarIcon: ({focused, color}) => {
            return (
              <TabIcon
                color={color}
                path={!focused ? iconPaths.user : iconPaths.userFilled}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const TabIcon = ({color, path}) => (
  <Image
    tintColor={color}
    source={path}
    style={{height: typography.FONT_SIZE_24, width: typography.FONT_SIZE_24}}
  />
);
