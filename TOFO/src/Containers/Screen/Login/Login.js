import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from "react-native";
import {
  COLOR,
  PAGE_CONTENT,
  NAVIGATION_SCREENS,
  ERROR_MESSAGE
} from "../../Utility/Constants";
import Regex from "../../Utility/Validation";

export default function Login({ navigation }) {
  //initializer
  const [userName, setUsername] = useState("");
  const [checkvaildUsername, setvaildUsername] = useState(false);
  const [Password, setPassword] = useState("");
  const [checkvaildPassword, setvaildPassword] = useState(false);
  //password Validation
  const checkUserPassword = passwordText => {
    setPassword(passwordText);
    if (Regex.validatePassword(Password)) {
      setvaildPassword(false);
    } else {
      setvaildPassword(true);
    }
  }
  //UserName Validation
  const checkUsername = userNameText => {
    setUsername(userNameText);
    if (Regex.validateUserName(userName)) {
      setvaildUsername(false);
    }
    else {
      setvaildUsername(true);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <ImageBackground style={styles.backgroundImageSize}
          source={require('../../../../src/Assets/Images/Image_login.png')} />
      </View>
      <View style={styles.inputBoxContainer}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{PAGE_CONTENT.WELCOME}
            <Text style={styles.tittleTextColor}>{PAGE_CONTENT.APP_NAME}
            </Text>{PAGE_CONTENT.TYPE}</Text>
        </View>
        <View style={styles.inputBox_userName}>
          <TextInput
            style={styles.inputText}
            maxLength={15}
            value={userName}
            onChangeText={userNameText => checkUsername(userNameText)}
            placeholder={PAGE_CONTENT.USERNAME}
            placeholderTextColor={COLOR.BLACK} />
        </View>
        {checkvaildUsername ? (
          <Text style={styles.errorMessageText}>{ERROR_MESSAGE.USERNAME_ERROR}</Text>
        ) : (
          null
        )}
        <View style={styles.inputBox_password}>
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            maxLength={16}
            placeholder={PAGE_CONTENT.PASSWORD}
            value={Password}
            placeholderTextColor={COLOR.BLACK}
            onChangeText={passwordText => checkUserPassword(passwordText)} />
        </View>
        {checkvaildPassword ? (
          <Text style={styles.errorMessageText}>{ERROR_MESSAGE.PASSWORD}</Text>
        ) : (
          null
        )}
        <View>
          <TouchableOpacity
            disabled={userName == '' || Password == '' || checkvaildUsername == true || checkvaildPassword == true}
            style={styles.loginButtonDisabled}
            onPress={() => navigation.navigate(NAVIGATION_SCREENS.HOME_SCREEN)}>
            <Text style={styles.buttonLabel}>{PAGE_CONTENT.LOGIN_TEXT}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_SCREENS.FORGOT_SCREEN)}>
            <Text style={styles.forgotText}>{PAGE_CONTENT.FORGOT}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{PAGE_CONTENT.NEW_ACCOUNT}</Text>
          <Pressable onPress={() => navigation.navigate(NAVIGATION_SCREENS.SIGN_UP)}>
            <Text style={styles.signUpText}>{PAGE_CONTENT.SIGNUP}</Text>
          </Pressable>
        </View>
        <StatusBar
          translucent
          backgroundColor={COLOR.WHITE}
          barStyle={COLOR.DARK_CONTENT} />
      </View>
    </View>
  );
}
//parent Container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: COLOR.WHITE
  },
  backgroundImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE
  },
  backgroundImageSize: {
    width: '100%',
    height: '100%'
  },
  // InputBox container for all content
  inputBoxContainer: {
    flex: 3,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },
  // tittle space
  titleView: {
    margin: 15
  },
  //Title color and font Size
  titleText: {
    color: COLOR.BLACK,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: ''
  },
  // Color for  App Name
  tittleTextColor: {
    color: COLOR.RED
  },
  //InputBox for userName 
  inputBox_userName: {
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: COLOR.WHITE,
    alignContent: 'space-between',
  },
  // //InputBox for password
  inputBox_password: {
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: COLOR.WHITE,
    margin: 8
  },
  //input field Text
  inputText: {
    fontSize: 20,
    color: COLOR.BLACK,
    marginLeft: 10
  },
  //error message field
  errorMessageText: {
    alignSelf: 'baseline',
    color: COLOR.RED,
    fontSize: 15,
    marginLeft: 10
  },
  //login Button View
  loginButtonview: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Button disable for login
  loginButtonDisabled: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.ORANGE,
    borderRadius: 30,
    margin: 10
  },
  //Text for login
  buttonLabel: {
    color: COLOR.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center'
  },
  //Forget text
  forgotText: {
    color: COLOR.BLACK,
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 6
  },
  //Bottom view for forgot
  footer: {
    flexDirection: "row",
    marginTop: 5
  },
  //don't have an account Text
  footerText: {
    color: COLOR.BLACK,
    fontSize: 15
  },
  //SignUp text
  signUpText: {
    color: COLOR.BLUE,
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10
  },
});






