import Checklist from '@/Containers/Screen/DashBoard/Checklist';
import Home from '@/Containers/Screen/DashBoard/Home';
import Profile from '@/Containers/Screen/DashBoard/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import { BACKGROUND_COLORS, TAB_NAME } from '../../src/Containers/Utility/Constants';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={TAB_NAME.HOME}
    >
      <Tab.Screen
        name={TAB_NAME.HOME}
        component={Home}
        tabBarOptions={{ showIcon: true }}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle:
            { color: BACKGROUND_COLORS.BLACK, fontSize: 14 },
          tabBarStyle:
            { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          headerShown: false,
          tabBarIcon: (focused, tintColor) => (
            <Image style={{ width: 30, height: 30 }}
              source={require('../Assets/Images/home.png')} />
          )
        }}
      />
      <Tab.Screen
        name={TAB_NAME.CHECKLIST}
        component={Checklist}
        options={{
          tabBarLabel: 'Checklist',
          tabBarLabelStyle:
            { color: BACKGROUND_COLORS.BLACK, fontSize: 14 },
          tabBarStyle:
            { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          headerShown: false,
          tabBarIcon: (focused, tintColor) => (
            <Image style={{ width: 30, height: 30 }}
              source={require('../Assets/Images/bell.png')} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.USER}
        component={Profile}
        options={{
          tabBarLabel: 'User',
          headerShown: false,
          tabBarLabelStyle:
            { color: BACKGROUND_COLORS.BLACK, fontSize: 14, },
          tabBarStyle:
            { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          tabBarIcon: (focused, tintColor) => (
            <Image style={{ width: 30, height: 30 }}
              source={require('../Assets/Images/profile.png')} />
          )
        }}
      />
    </Tab.Navigator>
  );
}









