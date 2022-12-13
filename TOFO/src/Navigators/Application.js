import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import Login  from '@/Containers/Screen/Login/Login'
import Forgot from '@/Containers/Screen/Forgot/Forgot'
import Change from '@/Containers/Screen/Forgot/ChangePassword'
import Signup from '@/Containers/Screen/Signup/SignUp'
import BottomNavigator from './BottomNavigation'
import { NAVIGATION_SCREENS } from '@/Containers/Utility/Constants'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

        <Stack.Navigator screenOptions={{ headerShown: false }} >     
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
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
