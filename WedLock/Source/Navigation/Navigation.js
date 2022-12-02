import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import Forgot from '../Screen/Forgot';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator style={styles.container}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login",
                        headerTitleStyle: { color: "powderblue" }
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font1: {
        color: 'blue'
    }

});
