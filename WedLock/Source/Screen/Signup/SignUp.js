import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
   TITLE,
   PLACEHOLDER,
   BUTTONS,
   ERRORMESSAGE,
   BACKGROUND_COLORS,
   REGEX
   } from "../../../Utility/constant";
   import Utils from "../../../Utility/Utility";
export default function Signup({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkValidEmail, setCheckValidateEmail] = useState(false);
  const [checkValidName, setCheckValidateName] = useState(false);
  const [Name, setname] = useState("");
  const [Number, setnum] = useState("");
  const [checkValidnum, setnumcheck] = useState(false);
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setConfirmpass] = useState("");
  //User name Validation
  const userName = (text) => {
    let rule =REGEX.USERNAME;
    setname(text)
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //password validation
  const checkPasswordValidity = (text) => {
    let passwordWhiteSpace=REGEX.PASSWORD;
    setPassword(text);
    if (passwordWhiteSpace.test(text)) {
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
    if(Utils.validateEmail(email)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //Number validation
  const num = (numeri) => {
    let numbervalid=REGEX.NUMBER;
    setnum(numeri)
    if (numbervalid.test(numeri) || numbervalid == 0) {
      setnumcheck(false);
    } else {
      setnumcheck(true);
    }
  };
  return (
    <View >
      <ImageBackground style={styles.backgroundImage} source={require('../../../Image/bg.jpg')}>
        <View style={styles.contentView} >
          <View style={styles.titleTextView} >
            <Text style={styles.titleText}>{TITLE.TITLETEXT}</Text>
          </View>
        <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.USERNAME} placeholderTextColor={"white"} value={Name} onChange={(e => setname(e.target.value))}
              onChangeText={(text) => userName(text)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidName ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.USERNAME}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText} secureTextEntry={true}
              placeholder={PLACEHOLDER.PASSWORD} placeholderTextColor={"white"} value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidpass ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.PASSWORD}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.CONFIRM_PASSWORD} secureTextEntry={true}
              placeholderTextColor={"white"}
              onChangeText={(text) => setConfirm(text)} value={Confirm}
              underlineColorAndroid={'transparent'} />
          </View>
          {password == Confirm ? (
            <Text style={styles.errorMessage}></Text>
          ) : (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.CONFIRM_PASSWORD}</Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.EMAIL} placeholderTextColor={"white"} value={email} onChangeText={(email) => checkEmail(email)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.EMAIL}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.inputTextBox}>
            <TextInput style={styles.inputText}
              placeholder={PLACEHOLDER.MOBILE_NUMBER} placeholderTextColor={"white"} value={Number} onChangeText={(numeri) => num(numeri)}
              keyboardType='numeric'
              maxLength={10}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidnum ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.MOBILE_NUMBER}</Text>
          ) : (
            <Text style={styles.errorMessage}></Text>
          )}
          <View style={styles.buttonFlex}>
            <TouchableOpacity style={styles.backToLoginButton} onPress={() => navigation.navigate('Login')}>
              <View >
                <Text style={styles.backToLoginButtonText}><Icon name='doubleleft' size={20} color={'white'} alignItems={'center'} />{BUTTONS.BACK_TO_LOGIN}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.disabledButton}>
              {Name == '' || password == '' || email == '' || Number == '' || password != Confirm || checkValidpass || checkValidnum || checkValidEmail || checkValidName ? (
                <TouchableOpacity disabled>
                  <Text style={styles.createButtonText}>{BUTTONS.CREATE}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate("BottomNavigator")}>
                  <Text style={styles.createButtonText}>{BUTTONS.CREATE}</Text>
                </TouchableOpacity>
              )}
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
    marginTop:'30%'
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
    backgroundColor: 'rgba(52,52, 52, 0.9)',
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
  //Textbox input style
inputText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },
  //flex for buttons
  buttonFlex:{
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
    color: 'white',
    fontWeight: 'bold',
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
    color: 'white',
    fontWeight: 'bold',
  },
  //Error msg style
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold'
  }
});