
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Login } from '../Screen/Login/Login';
import Forgot from '../Screen/Forgot/Forgot';
import Signup from '../Screen/Signup/SignUp';
import BottomNavigator from './BottomNavigation';
import Change from '../Screen/Forgot/ChangePassword';
import Profile from '../Screen/DashBoard/Profile';


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


