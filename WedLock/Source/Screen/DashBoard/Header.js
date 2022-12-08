import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


const Head = () => (
  <Appbar.Header style={styles.headercolor} activeColor="white">
    <Image source={require('../../../Image/AppLogo.png')} style={styles.img} />
    <Appbar.Content style={styles.titleclr} title="ToFo" titleStyle={headerTitleStyle= { color: "red" }} />
    <Appbar.Action style={styles.menu} icon="menu" onPress={() => { }} />
  </Appbar.Header>
);
export default Head;

const styles = StyleSheet.create({
  headercolor: {
    marginTop:50,
   
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height:40,

  },
  titleclr: {
    alignItems: 'center',
    justifyContent: 'center',
    color:"red"



  },
  img: {
    alignItems: 'flex-start',
    height: 40,
    width: 60
  },
  menu: {
    height: 50,
    icon: 230,
    width:70
 
  }

});


