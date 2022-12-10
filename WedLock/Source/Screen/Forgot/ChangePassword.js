
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";
import { ERROR_MESSAGE } from '../../../Utility/constant';
import { FORGOT_COLOR } from '../../../Utility/constant';
import { FORGOT_TITLE } from '../../../Utility/constant';

export default function Change({ navigation }) {
  const [password, setPassword] = useState("")
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  const [checkValidpConfirm, setCheckValidConfirm] =useState(true)

  const checkPasswordValidity = (checkPassword) => {
    let isNonWhiteSpace = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(checkPassword);
    if (isNonWhiteSpace.test(checkPassword)) {
      setCheckValidPass(false);
    }
    else {
      setCheckValidPass(true);
    }
  };
  const checkConfirmPasswordValidity = (checkConfirm) => {
    setPass(checkConfirm);
    if (password==checkConfirm) 
    {
      setCheckValidConfirm(true);
    } else 
    {
      setCheckValidConfirm(false);
    }


  };
  return (


    <View style={styles.change}>
      <View style={styles.Logo}>
        <ImageBackground source={require('../../../Image/22.jpg')} style={styles.background} />
      </View>
      <StatusBar translucent backgroundColor={FORGOT_COLOR.WHITE} barStyle="light-content" />
      <View style={styles.app1}>
        <Text style={styles.Title}>{FORGOT_TITLE.TITLE_CONTENT}</Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.text}
            placeholder={ERROR_MESSAGE.ENTER_NEWPASSWORD}
            placeholderTextColor={FORGOT_COLOR.WHITE}
            underlineColorAndroid={"transparent"}
            value={password}
            maxLength={10}
            onChangeText={(checkPassword) => checkPasswordValidity(checkPassword)}
            onChange={(New) => setPassword(New.target.value)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.errorMsg}>
          {checkValidpass ? (
            <Text style={styles.textFaild1}>{ERROR_MESSAGE.PASSWORD_INVALID}</Text>
          ) : (
            <Text style={styles.textFaild1}></Text>
          )}
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.text}
            placeholder={ERROR_MESSAGE.ENTER_CONFIRMPASSWORD}
            placeholderTextColor={FORGOT_COLOR.WHITE}
            maxLength={10}
            onChange={(confirm) => setPass(confirm.target.value)}
            onChangeText={(checkConfirm) => checkConfirmPasswordValidity(checkConfirm)}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
          /></View>
        <View style={styles.errorMsg}>
          {checkValidpConfirm ? (
            <Text style={styles.textFaild1}></Text>
          ) : (
            <Text style={styles.textFaild1}>{ERROR_MESSAGE.PASSWORD_CONFIRM}</Text>
          )}
        </View>
        <View>
          {(checkValidpass) || (password != Confirm) || (password=='') || (Confirm=='') ? (
            <TouchableOpacity
              disabled
              style={styles.button}
            >
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>
          )}

        </View>
      </View>

    </View>



  );
}

//stylesheet for changepassword screen
const styles = StyleSheet.create({
  //overall
  change: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: FORGOT_COLOR.WHITE
  },
  //background
  background: {
    width: "100%",
    height: "100%"
  },
  //app content
  app1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    backgroundColor: FORGOT_COLOR.WHITE,
    width: '100%',
    height: '100%',
    marginBottom: 70
  },
  //appLogo
  Logo: {
    flex: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: FORGOT_COLOR.WHITE
  },
  //Display text
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 25,
    color: FORGOT_COLOR.BLACK
  },
  //(New Password)
  //input-box
  textInput: {
    justifyContent: "center",
    height: 50,
    backgroundColor: FORGOT_COLOR.BACKGROUND_INPUT,
    borderRadius: 100,
    width: "90%",
    borderColor: FORGOT_COLOR.BLACK,
    borderWidth: 1,
  },
  //input-box text
  text: {
    marginHorizontal: 30,
    color: FORGOT_COLOR.WHITE,
    fontWeight: 'bold'
  },
  //Error Message
  errorMsg: {
    marginVertical: 10
  },
  //Error Message text
  textFaild1: {
    color: FORGOT_COLOR.RED,
  },

  //disable button
  button: {
    alignItems: 'center',
    height: 50,
    backgroundColor: FORGOT_COLOR.ORANGERED,
    width: 300,
    justifyContent: 'center',
    borderRadius: 30
  },
  //Enable & disable button
  btntxt: {
    color: FORGOT_COLOR.WHITE,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    fontSize: 25
  },
})
