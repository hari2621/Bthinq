import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Checklist from '../Screen/DashBoard/Checklist';
import Profile from '../Screen/DashBoard/Profile';
import Home from "../Screen/DashBoard/Home";
import { BACKGROUND_COLORS,TAB_NAME } from '../../Utility/Constants';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={TAB_NAME.HOME}
    >
      <Tab.Screen
        name={TAB_NAME.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: BACKGROUND_COLORS.BLACK, fontSize: 14 },
          tabBarStyle: { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={TAB_NAME.HOME} color={BACKGROUND_COLORS.BLACK} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.CHECKLIST}
        component={Checklist}
        options={{
          tabBarLabel: 'Checklist',
          tabBarLabelStyle: { color: BACKGROUND_COLORS.BLACK, fontSize: 14 },
          tabBarStyle: { backgroundColor: BACKGROUND_COLORS.ORANGE_ },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={TAB_NAME.BELL} color={BACKGROUND_COLORS.BLACK} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_NAME.USER}
        component={Profile}
        options={{
          tabBarLabel: 'User',
          tabBarLabelStyle: { color: BACKGROUND_COLORS.BLACK, fontSize: 14, },
          tabBarStyle: { backgroundColor:BACKGROUND_COLORS.ORANGE_ },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={TAB_NAME.ACCOUNT} color={BACKGROUND_COLORS.BLACK} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}









