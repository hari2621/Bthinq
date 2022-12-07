import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

console.log(responseWidth);
console.log(responseHeight);


export function Login() {
  const [username, setUsername] = useState("");
  const [checkvaildusername, setvaildusername] = useState(false);
  const [Password, setpassword] = useState("");
  const [checkvaildpassword, setvaildpassword] = useState(false);

  const CheckUserpassword = text => {
    let re = /\S+@\S+\S+/;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,10}$/;

    setpassword(text);
    if (re.test(text) || regex.test(text)) {
      setvaildpassword(false);
    } else {
      setvaildpassword(true);
    }

  }

  const CheckUsername = text => {
    let re = /\S+@\S+\S+/;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]{0,1})[A-Za-z\d@$!%*#?&]{8,10}$/;

    setUsername(text);
    if (re.test(text) || regex.test(text)) {
      setvaildusername(false);
    }
    else {
      setvaildusername(true);
    }

  }
  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    return null;
  };

  const Login = () => {
    const checkPassword = checkPasswordValidity(Password);
    if (!checkPassword) {
      navigation.navigate("Home")
    } else {
      alert(checkPassword);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backclr: {
    backgroundColor: 'rgba(52,52, 52, 0.1)',
    padding: 30,
    margin: 20,
    borderRadius: 30
  },

  image: {
    width: 100,
    height: 150,
    marginHorizontal: 10,
    marginLeft: 150,
    marginTop: 100,
  },
  image1: {
    flex: 1,
    justifyContent: "center",
    height: "110%",
    width: "100%",
  },

  logo1: {
    marginVertical: 1
  },
  headingclr: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 90

  },//heading
  topbox: {
    marginBottom:100,
    

  },
  logo:{
      marginBottom:150,
  },
  inputBox: {
    width: 300,
    borderWidth:1,
    borderRadius: 30,
    padding: 9,
    marginTop: 10,
    backgroundColor: 'rgba(52,52, 52, 0.6)',
    marginLeft: 60
  },

  //input type
  ForgotText: {
    color: '#000',
    fontSize: 19,
    textAlign: 'center',
    marginLeft:23,
    marginRight:18,
    paddingTop:5
    },//forget text

  text: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  },//username text
  place: {
    color: 'white'

  },
  text1: {
    color: '#000000',
    marginLeft: 60,
    fontSize:15
  },//don't text
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 320,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },//login
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(52,52, 52, 0.9)',
    borderRadius: 50,
    marginRight: 50,
    marginTop: 90
  },
  //login button view

  buttondis: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orangered',
    borderRadius: 30,
    marginLeft: 100,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -10,
    marginRight: 10,

  },
  buttonLabel1: {
    color: 'blue',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    padding:1,
    fontWeight:'bold'

  },//login text
  footer: {
    flexDirection: "row",
    marginLeft:50,
    marginRight:50

  },//bottom view

  fontsfield: {
    alignSelf: 'flex-end',
    color: 'red',
    fontSize: 20,
    marginRight:60,
  },
});
