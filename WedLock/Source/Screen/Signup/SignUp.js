import React, { useState } from "react";
import {
  ImageBackground,
  LogBox,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
LogBox.ignoreLogs(['Remote debugger']);
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
  const handlename = (text) => {
    let rule = /^[a-zA-Z]{3,16}$/;
    setname(text)
    if (rule.test(text) || rule == 0) {
      setCheckValidateName(false);
    } else {
      setCheckValidateName(true);
    }
  };
  //Email field
  const handleCheckEmail = (text) => {
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
  const setConfi = (text) => {
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
    <View style={styles.signup}>
      <ImageBackground style={styles.image1} source={require('../../../Image/Leaves.jpg')}>
        <View style={styles.signup1} >
          <View style={styles.head} >
            <Text style={styles.header}>TOFO</Text>
          </View>
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder="User name" placeholderTextColor={"white"} value={Name} onChange={(e => setname(e.target.value))}
              onChangeText={(text) => handlename(text)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidName ? (
            <Text style={styles.textFailed}>Name is required</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput} secureTextEntry={true}
              placeholder="Password" placeholderTextColor={"white"} value={password}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidpass ? (
            <Text style={styles.textFailed}>Please enter the valid password(Eg:Aaa@12)</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder="Confirm Password" secureTextEntry={true}
              placeholderTextColor={"white"}
              onChangeText={(text) => setConfi(text)} value={Confirm}
              underlineColorAndroid={'transparent'} />
          </View>
          {password == Confirm ? (
            <Text style={styles.textFailed}></Text>
          ) : (
            <Text style={styles.textFailed}>Password doesn't match</Text>
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder="Email" placeholderTextColor={"white"} value={email} onChangeText={(text) => handleCheckEmail(text)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Enter valid Email</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <View style={styles.textbox}>
            <TextInput style={styles.textinput}
              placeholder="Mobile Number" placeholderTextColor={"white"} value={Number} onChangeText={(numeri) => num(numeri)}
              keyboardType='numeric'
              maxLength={10}
              underlineColorAndroid={'transparent'} />
          </View>
          {checkValidnum ? (
            <Text style={styles.textFailed}>Enter valid number</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <View style={styles.fle}>
            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
              <View >
                <Text style={styles.backbtn}><Icon name='doubleleft' size={20} color={'white'} alignItems={'center'} />Back To Login</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buttdis}>
              {Name == '' || password == '' || email == '' || Number == '' || password != Confirm || checkValidpass || checkValidnum || checkValidEmail || checkValidName ? (
                <TouchableOpacity disabled>
                  <Text style={styles.createbtn}>Create</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("BottomNavigator")}>
                  <Text style={styles.createbtn}>Create</Text>
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
  signup1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Background Image
  image1: {
    width: '100%',
    height: '100%',
  },
  //View for text TOFO
  head: {
    marginBottom: 30
  },
  //Style for text TOFO
  header: {
    fontSize: 30,
    color: '#000000',
  },
  //Textbox View
  textbox: {
    width: '80%',
    height: '5%',
    borderRadius: 30,
    backgroundColor: 'rgba(52,52, 52, 0.9)',
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 5,
  },
  //Textbox input style
  textinput: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center"
  },
  //flex for buttons
  fle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '15%',
  },
  //Back to Login Button
  button1: {
    alignItems: 'center',
    backgroundColor: '#F2661B',
    width: '50%',
    height: '40%',
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  //Back to Login Text
  backbtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  //Create button enabled
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '40%',
    borderRadius: 30,
  },
  //Create button disabled
  buttdis: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0358C',
    width: '45%',
    height: '40%',
    borderRadius: 30,
    borderWidth: 1,
  },
  //Create button text
  createbtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  //Error msg style
  textFailed: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold'
  }
});