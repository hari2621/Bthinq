import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Forgot from '../Screen/Forgot';
import SignUp from '../Screen/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Profile from '../Screen/Profile';
import Home from '../Screen/Home';
import bottomNavigator from './bottomNavigation';

export default function Navigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator style={styles.container}>
            <Stack.Screen
                    name="bottomNavigator"
                    component={bottomNavigator}
                    options={{
                        title: "",
                        headerTitleStyle: { }
                    }}/>

                <Stack.Screen
                    name="Login"
                    component={Login} />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}/>
                <Stack.Screen
                    name="SignUp"
                    component={SignUp} />
               

            </Stack.Navigator>
        </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font1: {
        color: 'blue'
    }

});
