import React, { useState } from "react";
import {
  ImageBackground,
  StatusBar, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
// import { useChangePostMutation } from "../../../Services/modules/LoginAction/LoginPostMethod";
import { globalstyles } from "../../CommonStyles/Styles";
import {
  BACKGROUND_COLORS,
  COLOR,
  ERROR_MESSAGE, NAVIGATION_SCREENS, PAGE_CONTENT, PLACEHOLDER
} from '../../Utility/Constants';
import Regex from '../../Utility/Validation';

export default function Change({ navigation}) {
  // console.log(route.params)
  const [password, setPassword] = useState("")
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  const [checkValidpConfirm, setCheckValidConfirm] = useState(true)
  // password validation
  const checkPasswordValidity = (checkPassword) => {
    setPassword(checkPassword);
    if (Regex.validatePassword(checkPassword)) {
      setCheckValidPass(false);
    }
    else {
      setCheckValidPass(true);
    }
  };
  const checkConfirmPasswordValidity = (checkConfirm) => {
    setPass(checkConfirm);
    if (password == checkConfirm) {
      setCheckValidConfirm(true);
    } else {
      setCheckValidConfirm(false);
    }
  };
  // let changeType = {
    
  //   User_Password: password,
  //   Confirm_Password: Confirm,
  // };
  // const [ChangePost] = useChangePostMutation(changeType);
  // const onSubmit = () => {
  //   ChangePost(changeType).then((response) => {
  //     console.log(response);
  //     if (response.data != undefined) {
  //       if (response.data.Response_code === 700) {
  //         alert('Enter Password and confirm password')
  //       }
  //       else if (response.data.Response_code === 200) {
  //         alert("Password Change Sucessfully")
  //         navigation.navigate(NAVIGATION_SCREENS.LOGIN)
  //       }
  //     }
  //     else {
  //       alert("Internet connection Faild")
  //     }

  //   })
  // }

  return (
    <View style={globalstyles.container}>
      <ImageBackground source={require('../../../../src/Assets/Images/Image_csp.jpg')} style={styles.backgroundImage} />
      <StatusBar translucent
        backgroundColor={COLOR.WHITE}
        barStyle={COLOR.DARK_CONTENT} />
      <View style={styles.main}>
        <Text style={styles.Title}>{PAGE_CONTENT.CHANGEPASSWORD_TITLE}</Text>
        <View style={globalstyles.textInput}>
          <TextInput
            style={styles.text}
            placeholder={ERROR_MESSAGE.ENTER_NEWPASSWORD}
            placeholderTextColor={COLOR.BLACK}
            underlineColorAndroid={BACKGROUND_COLORS.TRANSPARENT}
            value={password}
            maxLength={10}
            onChangeText={(checkPassword) => checkPasswordValidity(checkPassword)}
            onChange={(New) => setPassword(New.target.value)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.errorMsg}>
          {checkValidpass ? (
            <Text style={globalstyles.errorMessageText}>{ERROR_MESSAGE.PASSWORD_INVALID}</Text>
          ) : (
            <Text style={styles.textFaild1}></Text>
          )}
        </View>
        <View style={globalstyles.textInput}>
          <TextInput
            style={styles.text}
            placeholder={ERROR_MESSAGE.ENTER_CONFIRMPASSWORD}
            placeholderTextColor={COLOR.BLACK}
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
            <Text style={globalstyles.errorMessageText}>{ERROR_MESSAGE.PASSWORD_CONFIRM}</Text>
          )}
        </View>
        <View>
          <TouchableOpacity disabled={checkValidpass || password != Confirm || password == '' || Confirm == ''}
            style={styles.button}
            onPress={() =>navigation.navigate(NAVIGATION_SCREENS.LOGIN)} >
            <Text style={globalstyles.buttonText}>{PLACEHOLDER.SUBMIT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//stylesheet for changepassword screen
const styles = StyleSheet.create({
  //app content
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
    backgroundColor: BACKGROUND_COLORS.WHITE,
    width: '100%',
    height: '100%',
    marginBottom: 70
  },
  //appLogo
  backgroundImage: {
    flex: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Display text
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 25,
    color: COLOR.BLACK
  },
  //input-box text
  text: {
    marginHorizontal: 30,
    color: COLOR.BLACK,
    fontSize: 20
  },
  //Error Message
  errorMsg: {
    marginVertical: 10
  },
  //Error Message text
  textFaild1: {
    color: COLOR.RED,
  },
  //disable button
  button: {
    alignItems: 'center',
    height: 50,
    backgroundColor: COLOR.ORANGERED,
    width: 300,
    justifyContent: 'center',
    borderRadius: 30
  },
  //Enable & disable button
})
