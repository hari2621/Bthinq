
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Checklist from '../Screen/DashBoard/Checklist';
import Profile from '../Screen/DashBoard/Profile';
import Home from "../Screen/DashBoard/Home";


const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{ backgroundColor: '#F77D3B'}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
         headerShown:false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Checklist"
        component={Checklist}
        options={{
          tabBarLabel: 'Checklist',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}









