import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import {
  COLOR,
  PAGE_CONTENT,
  TAB_NAME
} from '../../../Utility/Constant';

const Head = () => (
  <Appbar.Header
    style={styles.headercolor}
    activeColor={COLOR.WHITE} >
    <Image
      source={require('../../../Image/AppLogo.png')}
      style={styles.Logo} />
    <Appbar.Content
      style={styles.headerTitleStyle}
      title={PAGE_CONTENT.APP_NAME} />
    <Appbar.Action
      style={styles.menubar}
      icon={TAB_NAME.MENU}
      onPress={() => { }} />
  </Appbar.Header>
);
export default Head;

const styles = StyleSheet.create({
  // header background 
  headercolor: {
    marginTop: 50,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  // header title  
  headerTitleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: COLOR.RED
  },
  // app logo in header
  Logo: {
    alignItems: 'flex-start',
    height: 50,
    width: 70
  },
  // menu bar in header
  menubar: {
    height: 50,
    icon: 230,
    width: 70
  }
});


