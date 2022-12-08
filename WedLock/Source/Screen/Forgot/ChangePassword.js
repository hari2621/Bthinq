import { useNavigation } from "@react-navigation/native";
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
export default function Change() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("")
  const [otp, setotp] = useState("")
  const [checkValidpass, setCheckValidPass] = useState(false);
  const [Confirm, setPass] = useState("");
  const [checkValidConfirmPassword, setCheckValidConfirmPassword] = useState(false);
  const checkPasswordValidity = (text) => {
    let isNonWhiteSpace = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setPassword(text);
    if (isNonWhiteSpace.test(text)) {
      setCheckValidPass(false);
    }
    else {
      setCheckValidPass(true);
    }
  };
  const checkConfirmPasswordValidity = (text) => {
    setPass(text);
  };
  return (
   
     
    <View style={{ justifyContent: "center", alignItems: "center",flex:1,backgroundColor:'white'}}>
      <View style={styles.logo}>
      <ImageBackground source={require('../../../Image/22.jpg')} style={{ width: "100%", height: "100%"}}/>
      </View>
        <StatusBar translucent backgroundColor="white" barStyle="light-content" />
      <View style={{alignItems:'center', justifyContent:'center',flex:3,backgroundColor:'white',width:'100%',height:'100%',marginBottom:70}}>
          <Text style={styles.txt}>Change Password</Text>
          <View style={styles.textinput}>
            <TextInput
              style={styles.tex}
              placeholder="New Password"
              placeholderTextColor={"white"}
              underlineColorAndroid={"transparent"}
              value={password}
              maxLength={16}
              onChangeText={(text) => checkPasswordValidity(text)}
              onChange={(e) => setPassword(e.target.value)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.errormsg}>
            {checkValidpass ? (
              <Text style={styles.em}>password must be one upper,lowercase,& 8digit</Text>
            ) : (
              <Text style={styles.em}></Text>
            )}
          </View>
          <View style={styles.textinput1}>
            <TextInput
              style={styles.tex1}
              placeholder="Confirm New Password"
              placeholderTextColor={"white"}
              maxLength={16}
              onChange={(e) => setPass(e.target.value)}
              onChangeText={(text) => checkConfirmPasswordValidity(text)}
              underlineColorAndroid={"transparent"}
              secureTextEntry={true}
            /></View>
          <View style={styles.errormsg1}>
            {password == Confirm ? (
              <Text style={styles.em1}></Text>
            ) : (
              <Text style={styles.em1}>password must be same</Text>
            )}
          </View>
          <View>
            {(checkValidpass) || password != Confirm ? (
              <TouchableOpacity
                disabled
                style={styles.btn}
              >
                <Text style={styles.btntxt}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.btntxt}>Submit</Text>
              </TouchableOpacity>
            )}
              
          </View>
          </View>
       
          </View>
        
     
    
  );
}
const styles = StyleSheet.create({
  
  back1: {
    resizeMode: 'center',
    width: 56
  },
  logo:{
  flex:4,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'white'
},
  
  png: {
    height: 50,
    width: 100,
  },
  header: {
    fontSize: 40,
    color: '#000000',
   
    alignSelf: 'center',
  },
  textinput: {
    justifyContent: "center",
    height: 50,
    backgroundColor: 'rgba(52,52,52,0.7)',
    borderRadius: 100,
    width: "90%",
    borderColor: 'black',
    borderWidth: 1,
  },
  tex: {
    marginHorizontal: 30,
    color: "white",
    fontWeight: 'bold'
  },
  textinput1: {
    justifyContent: "center",
    height: 50,

    backgroundColor: 'rgba(52,52,52,0.7)',
    borderRadius: 100,
    width: "90%",
    borderColor: 'black',
    borderWidth: 1,
  },
  tex1: {
    marginHorizontal: 30,
    color: "white",
    fontWeight: 'bold'
  },
  errormsg: {
    marginVertical: 10
  },
  em: {
    color: 'red',
  },
  errormsg1: {
    marginVertical: 10
  },
  em1: {
    color: 'red',
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 25,
    color: "black"
  },
  btn: {
    alignItems: 'center',
    height: 50,

    backgroundColor: 'orangered',
    width: 180,
    justifyContent: 'center',
    borderRadius: 30
  },
  back1: {
    height: "100%",
    width: "100%",
  }
})
