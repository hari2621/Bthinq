import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Checklist from '../Screen/DashBoard/Checklist';
import Profile from '../Screen/DashBoard/Profile';
import Home from "../Screen/DashBoard/Home";
import { BACKGROUND_COLOUR } from '../../Utility/constant';
import { TAB_NAME } from '../../Utility/constant';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen
        name={TAB_NAME.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: BACKGROUND_COLOUR.BLACK, fontSize: 14 },
          tabBarStyle: { backgroundColor: BACKGROUND_COLOUR.ORANGE },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={BACKGROUND_COLOUR.BLACK} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.CHECKLIST}
        component={Checklist}
        options={{
          tabBarLabel: 'Checklist',
          tabBarLabelStyle: { color: BACKGROUND_COLOUR.BLACK, fontSize: 14 },
          tabBarStyle: { backgroundColor: BACKGROUND_COLOUR.ORANGE },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={BACKGROUND_COLOUR.BLACK} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.USER}
        component={Profile}
        options={{
          tabBarLabel: 'User',
          tabBarLabelStyle: { color: BACKGROUND_COLOUR.BLACK, fontSize: 14, },
          tabBarStyle: { backgroundColor: BACKGROUND_COLOUR.ORANGE },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={BACKGROUND_COLOUR.BLACK} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}









