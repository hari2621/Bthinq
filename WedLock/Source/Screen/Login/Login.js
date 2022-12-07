import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Pressable, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);


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
      navigation.navigate("BottomNavigator")
    } else {
      alert(checkPassword);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <ImageBackground style={styles.image1} source={require('../../../Image/back1.png')} />
      </View>
      <View style={styles.topbox}>
        <View style={styles.head}>
        <Text style={styles.headingclr}>Welcome To <Text style={{ color: 'red' }}>TOFO</Text> Events</Text>
        </View>
        
         <View style={styles.inputBox}>
          <TextInput style={styles.text} maxLength={15} value={username} onChangeText={text => CheckUsername(text)}
            placeholder="UserName" placeholderTextColor='black' />
        </View>
        {checkvaildusername ? (
          <Text style={styles.fontsfield}>UserName is not valid</Text>
        ) : (
          <Text style={styles.fontsfield}> </Text>
        )}

        <View style={styles.inputBox1}>
          <TextInput secureTextEntry={true} style={styles.text} maxLength={15}
            placeholder="Password" value={Password} placeholderTextColor='black' onChangeText={text => CheckUserpassword(text)} />
        </View>
        {checkvaildpassword ? (
          <Text style={styles.fontsfield1}>Password is not valid</Text>
        ) : (
          <Text style={styles.fontsfield1}> </Text>
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
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.buttonLabel1}>Signup</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor:'white'
  },
  logo: {
    flex: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  topbox: {
    flex:4,
    width:'80%',
    height:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'white',
  },
  image1: {
    width: '100%',
    height: '100%'
  },//backgroundimage

  head:{
    marginVertical:10
  },// tittle space
  headingclr: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',

  },//heading

  inputBox: {
    width:'100%',
    height:'10%',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    marginVertical:5

  },//input field

  text: {
    fontSize: 20,
    color: 'black',
    marginHorizontal:10
  
  },//username text
  inputBox1: {
    width:'100%',
    height:'10%',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    marginVertical:5
  },//input field
  fontsfield: {
    alignSelf: 'flex-end',
    color: 'red',
    fontSize: 20,
  },//error message field
  fontsfield1: {
    alignSelf: 'flex-end',
    color: 'red',
    fontSize: 20,
  },//error message field
  buttonContainer: {
    width:'100%',
    height:'10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10
  },//login button
  buttondis: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orangered',//'rgba(52,52, 52, 0.9)'
    borderRadius: 30,
  },//button disable
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orangered',
    borderRadius: 50,
  },//login button view active

  buttonLabel: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: -10,
    marginRight: 10,

  },//text for login
  ForgotText: {
    color: '#000',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: 6
  },//forget text
  footer: {
    flexDirection: "row",
    marginTop:5
  },//bottom view for forgot
  text1: {
    color: '#000000',
    fontSize: 15
  },//don't text
  buttonLabel1: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal:10
  },//login text

});
  // image: {
  //   width: '50%',
  //   height: '20%',
  //   marginVertical: 80,
  //   backgroundColor: 'black'
  // },
  // logo1: {
  //   marginVertical: 1
  // },
  // place: {
  //   color: 'white'
  // },
  // button1: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
 
  

  
  
  
  

  

