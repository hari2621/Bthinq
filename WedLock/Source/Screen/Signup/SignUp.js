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
  BACKGROUND_COLORS, BUTTONS,
  ERRORMESSAGE, PLACEHOLDER, TITLE
} from "../../../Utility/constant";
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
    let rule = /^[a-zA-Z]{3,16}$/;
    setname(text)
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //Email field
  const checkEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text)
    if (re.test(text) || regex.test(text)) {
      setCheckValidateEmail(false);
    } else {
      setCheckValidateEmail(true);
    }
  };
  //password validation
  const checkPasswordValidity = (text) => {
    let isNonWhiteSpace = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (isNonWhiteSpace.test(text)) {
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
  //Number validation
  const num = (numeri) => {
    let rule = /^[0-9]{10}$/;
    setnum(numeri)
    if (rule.test(numeri) || rule == 0) {
      setnumcheck(false);
    } else {
      setnumcheck(true);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../../../Image/Leaves.jpg')}>
        <View style={styles.signupform} >
          <View style={styles.title} >
            <Text style={styles.titleText}>{TITLE.TITLETEXT}</Text>
          </View>
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder={PLACEHOLDER.USERNAME} placeholderTextColor={"white"} value={Name} onChange={(e => setname(e.target.value))}
              onChangeText={(text) => userName(text)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidName ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.USERNAME}</Text>
          ) : (
            null
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput} secureTextEntry={true}
              placeholder={PLACEHOLDER.PASSWORD} placeholderTextColor={"white"} value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidpass ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.PASSWORD}</Text>
          ) : (
            null
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
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
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder={PLACEHOLDER.EMAIL} placeholderTextColor={"white"} value={email} onChangeText={(text) => checkEmail(text)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.EMAIL}</Text>
          ) : (
            null
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder={PLACEHOLDER.MOBILE_NUMBER} placeholderTextColor={"white"} value={Number} onChangeText={(numeri) => num(numeri)}
              keyboardType='numeric'
              maxLength={10}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidnum ? (
            <Text style={styles.errorMessage}>{ERRORMESSAGE.MOBILE_NUMBER}</Text>
          ) : (
            null
          )}
          <View style={styles.buttonflex}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
              <View >
                <Text style={styles.loginButtonText}><Icon name='doubleleft' size={20} color={'white'} alignItems={'center'} />{BUTTONS.BACK_TO_LOGIN}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.disbut} >
              {Name == '' || password == '' || email == '' || Number == '' || password != Confirm || checkValidpass || checkValidnum || checkValidEmail || checkValidName ? (
                <TouchableOpacity disabled style={styles.buttondisabled}>
                  <Text style={styles.createbtn}>{BUTTONS.CREATE}</Text>
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
  //Overall View style
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Background Image
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  //View for total form
  signupform: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //View for text TOFO
  title: {
    marginBottom: 30
  },
  //Style for text TOFO
  titleText: {
    fontSize: 30,
    color: '#000000',
  },
  //Textbox View
  textbox: {
    width: '80%',
    height: '5%',
    borderRadius: 30,
    backgroundColor: BACKGROUND_COLORS.GREY,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
  //Textbox input style
  textinput: {
    fontSize: 20,
    color: BACKGROUND_COLORS.WHITE,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },
  //flex for buttons
  buttonflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '15%',
  },
  //Back to Login Button
  loginButton: {
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLORS.ORANGE,
    width: '50%',
    height: '40%',
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  //Back to Login Text
  loginButtonText: {
    color: BACKGROUND_COLORS.WHITE,
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
  buttondisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLORS.GRAY,
    width: '45%',
    height: '40%',
    borderRadius: 30,
    borderWidth:1
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