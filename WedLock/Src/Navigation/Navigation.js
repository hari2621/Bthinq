
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION_SCREENS } from '../../Utility/Constants';
import Change from '../Screen/Forgot/ChangePassword';
import Forgot from '../Screen/Forgot/Forgot';
import Login from '../Screen/Login/Login';
import Signup from '../Screen/Signup/SignUp';
import BottomNavigator from './BottomNavigation';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer  >
            <Stack.Navigator >     
                <Stack.Screen
                    name={NAVIGATION_SCREENS.LOGIN}
                    component={Login}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name={NAVIGATION_SCREENS.FORGOT_SCREEN}
                    component={Forgot}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name={NAVIGATION_SCREENS.CHANGE_SCREEN}
                    component={Change}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name={NAVIGATION_SCREENS.SIGN_UP}
                    component={Signup}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name={NAVIGATION_SCREENS.HOME_SCREEN}
                    component={BottomNavigator}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


