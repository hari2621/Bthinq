import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Change from '../Containers/Screen/Forgot/ChangePassword'
import Forgot from '../Containers/Screen/Forgot/Forgot'
import Login from '../Containers/Screen/Login/Login'
import Signup from '../Containers/Screen/Signup/SignUp'
import StartupContainer from '../Containers/StartupContainer'
import { NAVIGATION_SCREENS } from '../Containers/Utility/Constants'
import BottomNavigator from './BottomNavigation'



// @refresh reset
const MainNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name={NAVIGATION_SCREENS.SPLASH_SCREEN}
                component={StartupContainer}
            />
            <Stack.Screen
                name={NAVIGATION_SCREENS.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={NAVIGATION_SCREENS.FORGOT_SCREEN}
                component={Forgot}
            />
            <Stack.Screen
                name={NAVIGATION_SCREENS.CHANGE_SCREEN}
                component={Change}
            />
            <Stack.Screen
                name={NAVIGATION_SCREENS.SIGN_UP}
                component={Signup}
            />
            <Stack.Screen
                name={NAVIGATION_SCREENS.HOME_SCREEN}
                component={BottomNavigator}
            />

        </Stack.Navigator>
    )
}

export default MainNavigator
