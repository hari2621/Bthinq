import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
export default function Forgot() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidateEmail] = useState()
    const handleCheckEmail = text1 => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        setEmail(text1)
        if (re.test(text1) || regex.test(text1)) {
            setCheckValidateEmail(false);
        } else {
            setCheckValidateEmail(true);
        }
    };
    const handleregis = () => {
        const checkPassword = handleCheckEmail(email);
        if (!checkPassword) {
            navigation.navigate("ChangePassword");
        } else {
            alert(checkPassword);
        }
    };
    return (
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center",flex:1 }}>
            <ImageBackground source={require('../../../Image/123.jpg')} style={{ width: "100%", height: "100%"}}>
                <StatusBar translucent backgroundColor="white" barStyle="light-content" />
            <View style={{alignItems:'center',justifyContent:'center',marginVertical:70,flex:4}}>
               <Image style={styles.png} source={require('../../../Image/AppLogo.png')} />
                    <Text style={styles.header}>TOFO</Text>
                    <View style={styles.textinput}>
                        <TextInput style={styles.tex}
                            placeholder="Enter your Email id." placeholderTextColor={'black'} value={email}
                            onChangeText={text1 => handleCheckEmail(text1)}
                            underlineColorAndroid={'transparent'} />
                    </View>
                    <View style={styles.errormsg}>
                        {checkValidEmail ? (
                            <Text style={styles.em}>Enter valid Email Id</Text>
                        ) : (
                            <Text></Text>
                        )}
                    </View>
                    <View>
                        {email == "" ||
                            checkValidEmail == true ?
                            (
                                <TouchableOpacity
                                    disabled
                                    style={styles.button}
                                    onPress={handleregis}
                                >
                                    <Text style={styles.btntxt}>Next</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button2} onPress={handleregis}>
                                    <Text style={styles.btntxt}>Next</Text>
                                </TouchableOpacity>
                            )}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    forget1: {
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    png: {
        height:'40%',
        width:'40%',
        marginBottom:30
    },
    textinput: {
         height:50,
         borderRadius:100,
         width:300,
         borderColor:'black',
         borderWidth:2,
         marginTop:50,
         color:'black'
    },
    tex: {
        //   marginHorizontal:30,
           color:'black',
           textAlign:'center',
           marginVertical:7,
           justifyContent:'center',
           fontSize:23
    },
    button2: {
        height:50,
        marginVertical:40,
        backgroundColor: 'orangered',
        width:180,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    btntxt: {
         color: 'white',
         fontWeight: 'bold',
         padding:10,
         textAlign:'center',
         fontSize:25
    },
    header: {
        fontSize: 40,
        color: 'orangered',
    },
    errormsg: {
        //   marginVertical:30
    },
    em: {
         color: 'red',
    },
    button5: {
        // alignSelf: 'stretch',
        // alignItems: 'center',
        // backgroundColor:'#454545',
    },
    button: {
         height:60,
        // marginVertical:50,
         backgroundColor: '#F54905',
        width:300,
         margin:50,
        borderRadius:30
    },
    back: {
        //   height:"100%",
        //   width:"100%",
        //   opacity:0.8
    }
});