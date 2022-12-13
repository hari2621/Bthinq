import React from 'react';
import Checklist from '@/Containers/Screen/DashBoard/Checklist';
import Home from '@/Containers/Screen/DashBoard/Home';
import Profile from '@/Containers/Screen/DashBoard/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BACKGROUND_COLORS, TAB_NAME } from '../../src/Containers/Utility/Constants';
import { Image, TouchableOpacity } from 'react-native';
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
          tabBarLabelStyle:
            { color: BACKGROUND_COLORS.BLACK, fontSize: 14 },
          tabBarStyle:
            { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          headerShown: false,
          tabBarIcon: (focused, tintColor) => (
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }}
                source={require('../Assets/Images/home.png')} />
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }}
                source={require('../Assets/Images/bell.png')} />
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30 }}
                source={require('../Assets/Images/profile.png')} />
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  );
}









