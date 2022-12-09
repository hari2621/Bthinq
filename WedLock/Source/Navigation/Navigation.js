
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Change from '../Screen/Forgot/ChangePassword';
import Forgot from '../Screen/Forgot/Forgot';
import Login from '../Screen/Login/Login';
import Signup from '../Screen/Signup/SignUp';
import BottomNavigator from './BottomNavigation';


export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer  >
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="ChangePassword"
                    component={Change}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="SignUp"
                    component={Signup}
                    options={{
                        headerShown: false
                    }} />

                <Stack.Screen
                    name="BottomNavigator"
                    component={BottomNavigator}
                    options={{
                        headerShown: false
                    }} />


            </Stack.Navigator>
        </NavigationContainer>

    );
}


