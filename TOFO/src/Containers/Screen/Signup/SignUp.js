import { number } from "prop-types";
import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import { useSignUpPostMutation } from "../../../Services/modules/LoginAction/LoginPostMethod";
import { globalstyles } from "../../CommonStyles/Styles";
import {
  BACKGROUND_COLORS,
  COLOR, ERROR_MESSAGE, NAVIGATION_SCREENS, PAGE_CONTENT, PLACEHOLDER
} from "../../Utility/Constants";
import Regex from "../../Utility/Validation";

export default function Signup({ navigation }) {
  //initializer
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [checkValidName, setCheckValidateName] = useState(false);
  const [Name, setName] = useState("");
  const [Number, setNum] = useState("");
  const [checkValidnum, setNumCheck] = useState(false);
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setConfirmpass] = useState("");
  const [checkValidpConfirm, setCheckValidConfirm] = useState(true)
  //Post Api
  // let postType = {
  //   UserName: Name,
  //   User_Password: password,
  //   Confirm_Password: Confirm,
  //   Email: email,
  //   Mobile_No: Number,
  // };
  // const [SignUpPost] = useSignUpPostMutation(postType);

  // const onSubmit = () => {
  //   SignUpPost(postType).then((response) => {
  //     console.log(response);
  //     if (response.data != undefined) {
  //       if (response.data.Response_code === 500) {
  //         Alert.alert("Username is already exists", "Try a different one..", [{ text: "ok" }])
  //       }
  //       else if (response.data.Response_code === 800) {
  //         Alert.alert("Email is already exists", "Try a different one..", [{ text: "ok" }])
  //       }
  //       else if (response.data.Response_code === 1000) {
  //         Alert.alert("Invalid", "password must be same", [{ text: "ok" }])
  //       }
  //       else if (response.data.Response_code === 200) {
  //         Alert.alert("LoginSucessfull", "Your UserName Is: " + postType.UserName + "\n" + "Your Password Is: " + postType.User_Password,
  //           [{ text: "Click ok to continue ", onPress: () => navigation.navigate(NAVIGATION_SCREENS.LOGIN) }])
  //       }
  //     }
  //     else {
  //       alert('check your Internet Connection')
  //     }

  //   })
  // }
  //User name Validation
  const userName = (text) => {
    setName(text)
    if (Regex.validateUserName(Name)) {
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
  const setConfirm = (checkConfirm) => {
    setConfirmpass(checkConfirm);
    if (password == checkConfirm) {
      setCheckValidConfirm(true);
    } else {
      setCheckValidConfirm(false);
    }
  };
  //Email field
  const checkEmail = (text) => {
    setEmail(text)
    if (Regex.validateEmail_Forgot(email)) {
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
  //rendering path
  return (
    <View style={globalstyles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../../src/Assets/Images/Image_signup.jpg')}>
        <StatusBar
          translucent
          backgroundColor={COLOR.WHITE}
          barStyle={COLOR.DARK_CONTENT} />
        <View style={styles.contentView} >
          <View style={styles.titleTextView} >
            <Text style={styles.titleText}>{PAGE_CONTENT.SIGNUP}</Text>
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
              onChangeText={(checkConfirm) => setConfirm(checkConfirm)}
              value={Confirm}
              underlineColorAndroid={COLOR.TRANSPARENT} />
          </View>
          {checkValidpConfirm ? (
            <Text style={styles.errorMessage}></Text>
          ) : (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.CONFIRM_PASSWORD}</Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.EMAIL}
              placeholderTextColor={COLOR.WHITE}
              value={email}
              onChangeText={(text) => checkEmail(text)}
              underlineColorAndroid={COLOR.TRANSPARENT}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.errorMessage}>{ERROR_MESSAGE.EMAIL_INVALID}</Text>
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
          {/* <TouchableOpacity
              style={styles.backToLoginButton}
              onPress={() => navigation.navigate(NAVIGATION_SCREENS.LOGIN)}>
              <View >
                <Text style={styles.backToLoginButtonText}>
                  <Icon name={PAGE_CONTENT.DOUBLE_LEFT} />{PAGE_CONTENT.BACK_TO_LOGIN}</Text>
              </View>
            </TouchableOpacity> */}
          <View style={styles.disabledButton}>
            <TouchableOpacity
              disabled={Name == '' || password == '' || email == '' || Number == '' || password != Confirm || checkValidpass || checkValidnum || checkValidEmail || checkValidName}
              onPress={() =>navigation.navigate(NAVIGATION_SCREENS.LOGIN) }>
              <Text style={styles.createButtonText}>{PAGE_CONTENT.CREATE}</Text>
            </TouchableOpacity>
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
    color: COLOR.BLACK,
    fontWeight: 'bold'
  },
  //Textbox View
  inputTextBox: {
    width: '80%',
    borderRadius: 30,
    backgroundColor: BACKGROUND_COLORS.GREY,
    borderWidth: 1,
    justifyContent: 'center',
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
    fontWeight: 'bold',
    size: 20,
    color: COLOR.BLACK,
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
    width: "80%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.ORANGE,
    borderRadius: 30,
    margin: 10
  },
  //Create button text
  createButtonText: {
    color: COLOR.BLACK,
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