import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Pressable, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
const responseWidth = Dimensions.get('window').width;
const responseHeight = Dimensions.get('window').height;

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
    <View style={styles.container}>
      <ImageBackground style={styles.image1} source={require('../Image/back.png')}>
      <View style={styles.logo}>
      <Image
          style={styles.image} source={require('../Image/AppLogo.png')} />
      </View>
        <View style={styles.topbox}>
          <Text style={styles.headingclr}>Welcome To Wedringz</Text>
          <View style={styles.inputBox}>
            <TextInput style={styles.text} maxLength={15} value={username} onChangeText={text => CheckUsername(text)}
              placeholder="UserName" placeholderTextColor='white' />
          </View>
          {checkvaildusername ? (
            <Text style={styles.fontsfield}>UserName is not valid</Text>
          ) : (
            <Text style={styles.fontsfield}> </Text>
          )}

          <View style={styles.inputBox}>
            <TextInput secureTextEntry={true} style={styles.text} maxLength={15}
              placeholder="Password" value={Password} placeholderTextColor='white' onChangeText={text => CheckUserpassword(text)} />
          </View>
          {checkvaildpassword ? (
            <Text style={styles.fontsfield}>Password is not valid</Text>
          ) : (
            <Text style={styles.fontsfield}> </Text>
          )}
          <View style={styles.buttonContainer}>
            {username == '' || Password == '' || checkvaildusername == true || checkvaildpassword == true ? (
              <TouchableOpacity disabled style={styles.buttondis} onPress={Login}  >

                <Text style={styles.buttonLabel}>Login</Text>

              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={Login}  >

                <Text style={styles.buttonLabel} >Login</Text>

              </TouchableOpacity>
            )}
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
              <Text style={styles.ForgotText}>Forgot Password..?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.text1}>Don't have an account?</Text>
            <Pressable  onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.buttonLabel1}>Signup</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
