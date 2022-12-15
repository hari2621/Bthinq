import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import MainNavigator from './Main'


const ApplicationNavigator = () => {
  //initializer
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const Stack = createStackNavigator()
  const { colors } = NavigationTheme
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
