import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Forgot from '../Screen/Forgot';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { Login } from '../Screen/Login';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer style={styles.container} >
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "",
                        headerTitleStyle: { color: "powderblue" },
                        headerTransparent:true,  
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
                    component={SignUp}
                    options={{
                        title: "SignUp",
                        headerTitleStyle: { color: "powderblue" }
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
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font1: {
        color: 'blue'
    }

});
