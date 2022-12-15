import React,{useEffect} from 'react'
import BottomNavigator from './BottomNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import { NAVIGATION_SCREENS } from '../Containers/Utility/Constants'
import Login from '../Containers/Screen/Login/Login'
import Forgot from '../Containers/Screen/Forgot/Forgot'
import Change from '../Containers/Screen/Forgot/ChangePassword'
import Signup from '../Containers/Screen/Signup/SignUp'
import SplashScreen from 'react-native-splash-screen'




// @refresh reset
const MainNavigator = () => {
    const Stack = createStackNavigator()
    useEffect(() => {
        setTimeout(() => SplashScreen.hide(),1000)
      }, [])
  return (
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
  )
}

export default MainNavigator
