import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import {
  BACKGROUND_COLORS,
  COLOR,
  PAGE_CONTENT
} from '../../Utility/Constants';

const Head = () => (
  <Appbar.Header
    style={styles.headercolor}
    activeColor={COLOR.WHITE} >
    <Image
      source={require('../../../../src/Assets/Images/AppLogo.png')}
      style={styles.Logo} />
    <Appbar.Content
      style={styles.headerTitleStyle}
      title={PAGE_CONTENT.APP_NAME} />
    <TouchableOpacity>
      <Image
        source={require('../../../Assets/Images/menu.png')}
        style={styles.menubar} />
    </TouchableOpacity>
  </Appbar.Header>
);

export default Head;
const styles = StyleSheet.create({
  // header background 
  headercolor: {
    backgroundColor: BACKGROUND_COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
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
    width: 80
  },
  // menu bar in header
  menubar: {
    height: 30,
    width: 30,
    margin: 10
  }
});


