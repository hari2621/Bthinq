import React from "react";
import {
  Image,
  ImageBackground, StyleSheet,
  Text, TouchableOpacity, View
} from 'react-native';
import {
  BACKGROUND_COLORS, NAVIGATION_SCREENS, PROFILE_FIELD
} from '../../Utility/Constants';

export default function Profile({ navigation }) {
  return (
    <ImageBackground
      style={styles.img}
      source={require('../../../../src/Assets/Images/Profile_bg.png')}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../../../../src/Assets/Images/testing.png')} />
        <View style={styles.body}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text> {PROFILE_FIELD.PROFILE}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>{PROFILE_FIELD.FEEDBACK} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>{PROFILE_FIELD.ABOUT_US}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.replace(NAVIGATION_SCREENS.LOGIN)}>
            <Text>{PROFILE_FIELD.LOG_OUT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 68,
    borderWidth: 3,
    borderColor: BACKGROUND_COLORS.BLACK,
    marginBottom: "20%",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: BACKGROUND_COLORS.ORANGE_,
  }
});







