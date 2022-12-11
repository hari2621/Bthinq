import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
   PLACEHOLDER,
   ERROR_MESSAGE,
   PAGE_CONTENT,
   NAVIGATION_SCREENS,
   BACKGROUND_COLORS,
   COLOR
   } from "../../../Utility/Constants";
import Regex from "../../../Utility/Validation";
export default function Signup({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [checkValidName, setCheckValidateName] = useState(false);
  const [Name, setName] = useState("");
  const [Number, setNum] = useState("");
  const [checkValidnum, setNumCheck] = useState(false);
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setConfirmpass] = useState("");
  //User name Validation
  const userName = (text) => {
    setName(text)
    if (Regex.validateUserName(userName)) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //password validation
  const checkPasswordValidity = (text) => {
    setPassword(text);
    if (Regex.validatePassword(text)) {
      setCheckValidPass(false);
    }
    else {
      setCheckValidPass(true);
    };
  };
  //confirm password Validation
  const setConfirm = (text) => {
    setConfirmpass(text)
  };
  //Email field
  const checkEmail = (email) => {
    setEmail(email)
    if (Regex.validateEmail(email)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //Number validation
  const num = (numeri) => {
    setNum(numeri)
    if (Regex.validateNumber(numeri)) {
      setNumCheck(false);
    } else {
      setNumCheck(true);
    }
  };
  return (
    <View >
      <ImageBackground 
      style={styles.backgroundImage} 
      source={require('../../../assets/Image/Image_signup.jpg')}>
        <View style={styles.contentView} >
          <View style={styles.titleTextView} >
            <Text style={styles.titleText}>{PAGE_CONTENT.APP_NAME}</Text>
          </View>
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.USERNAME} 
              placeholderTextColor={COLOR.WHITE} 
              value={Name} 
              onChange={(e => setName(e.target.value))}
              onChangeText={(text) => userName(text)}
              underlineColorAndroid={COLOR.TRANSPARENT} />
          </View>
          {checkValidName ? (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.USERNAME}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput 
            style={styles.inputText} 
            secureTextEntry={true}
              placeholder={PLACEHOLDER.PASSWORD} 
              placeholderTextColor={COLOR.WHITE} 
              value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              underlineColorAndroid={COLOR.TRANSPARENT} />
          </View>
          {checkValidpass ? (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.PASSWORD}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.CONFIRM_PASSWORD} 
              secureTextEntry={true}
              placeholderTextColor={COLOR.WHITE}
              onChangeText={(text) => setConfirm(text)}
               value={Confirm}
              underlineColorAndroid={COLOR.TRANSPARENT} />
          </View>
          {password == Confirm ? (
            <Text style={styles.errorMessage}></Text>
          ) : (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.CONFIRM_PASSWORD}</Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.EMAIL}
               placeholderTextColor={COLOR.WHITE} 
               value={email} 
               onChangeText={(email) => checkEmail(email)}
              underlineColorAndroid={COLOR.TRANSPARENT}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.EMAIL}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.MOBILE_NUMBER} 
              placeholderTextColor={COLOR.WHITE} 
              value={Number}
               onChangeText={(numeri) => num(numeri)}
              keyboardType={PAGE_CONTENT.KEYBOARD}
              maxLength={10}
              underlineColorAndroid={COLOR.TRANSPARENT} />
          </View>
          {checkValidnum ? (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.MOBILE_NUMBER}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.buttonFlex}>
            <TouchableOpacity 
            style={styles.backToLoginButton}
             onPress={() => navigation.navigate(NAVIGATION_SCREENS.LOGIN)}>
              <View >
                <Text style={styles.backToLoginButtonText}>
                  <Icon name={PAGE_CONTENT.DOUBLE_LEFT} />{PAGE_CONTENT.BACK_TO_LOGIN}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.disabledButton}>
              <TouchableOpacity 
              disabled={Name == '' || password == '' || email == '' || Number == '' || password != Confirm || checkValidpass || checkValidnum || checkValidEmail || checkValidName}
                 onPress={() => navigation.navigate(NAVIGATION_SCREENS.HOME_SCREEN)}>
                  <Text style={styles.createButtonText}>{PAGE_CONTENT.CREATE}</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
//Stylesheet for signup screen
const styles = StyleSheet.create({
  //Background Image
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  //Overall View style
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //View for text TOFO
  titleTextView: {
    marginBottom: 30,
    marginTop: '30%'
  },
  //Style for text TOFO
  titleText: {
    fontSize: 30,
    color: '#000000',
  },
  //Textbox View
  inputTextBox: {
    width: '80%',
    height: '5%',
    borderRadius: 30,
    backgroundColor: BACKGROUND_COLORS.GREY,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
  //Textbox input style
  inputText: {
    fontSize: 20,
    color: BACKGROUND_COLORS.WHITE,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },
  //flex for buttons
  buttonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '15%',
  },
  //Back to Login Button
  backToLoginButton: {
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLORS.ORANGE,
    width: '50%',
    height: '40%',
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  //Back to Login Text
  backToLoginButtonText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    size: 20,
    color: COLOR.WHITE,
    alignItems: 'center'
  },
  //Create button enabled
  createButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '40%',
    borderRadius: 30,
  },
  //Create button disabled
  disabledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLORS.PINK,
    width: '45%',
    height: '40%',
    borderRadius: 30,
    borderWidth: 1,
  },
  //Create button text
  createButtonText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
  //Error msg style
  errorMessage: {
    color: COLOR.RED,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold'
  }
});







