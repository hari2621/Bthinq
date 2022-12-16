import { setDefaultTheme } from '@/Store/Theme'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Login from './Screen/Login/Login'

const StartupContainer = ({navigation}) => {
 

  const init = async () => {
    if(Platform.OS==="android"){
      setTimeout(() => {
        SplashScreen.hide();
      },2000)
    }
    else{
      SplashScreen.hide();
    }
    navigation.navigate(Login)
    await setDefaultTheme({Theme:'default',darkMode:null});
    
  }

  useEffect(() => {
    init()
  })

  return (
    <></>
  );
}

export default StartupContainer
