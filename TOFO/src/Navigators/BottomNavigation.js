import Checklist from '@/Containers/Screen/DashBoard/Checklist';
import Home from '@/Containers/Screen/DashBoard/Home';
import Profile from '@/Containers/Screen/DashBoard/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BACKGROUND_COLORS,TAB_NAME } from '../../src/Containers/Utility/Constants';
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









