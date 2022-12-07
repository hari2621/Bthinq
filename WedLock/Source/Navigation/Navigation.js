
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Login } from '../Screen/Login/Login';
import Forgot from '../Screen/Forgot/Forgot';
import Signup from '../Screen/Signup/SignUp';
import Home from '../Screen/DashBoard/Home';


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
                        title: "Login",
                        headerTitleStyle: { color: "powderblue" }
                    }} />
                <Stack.Screen
                    name="SignUp"
                    component={Signup}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerTitleStyle: { color: "powderblue" }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


