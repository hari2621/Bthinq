import React, { useState } from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useForgotPostMutation } from '../../../Services/modules/LoginAction/LoginPostMethod';
import { globalstyles } from '../../CommonStyles/Styles';
import {
    BACKGROUND_COLORS,
    COLOR, ERROR_MESSAGE,
    NAVIGATION_SCREENS,
    PAGE_CONTENT,
    PLACEHOLDER
} from '../../Utility/Constants';
import Regex from '../../Utility/Validation';

export default function Forgot({ navigation }) {

    
    //initializer
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidateEmail] = useState(false)
    // Email validation
    const checkEmail = validEmail => {
        setEmail(validEmail)
        if (Regex.validateEmail_Forgot(email)) {
            setCheckValidateEmail(false);
        } else {
            setCheckValidateEmail(true);
        }
    };
    const changePassword = () => {
        const checkPassword = checkEmail(email);
        if (!checkPassword) {
            navigation.navigate(NAVIGATION_SCREENS.CHANGE_SCREEN);
        } else {
            alert(checkPassword);
        }
    };
    let forgotType = {
        Email:email,
      };
      const [ForgotPost] = useForgotPostMutation(forgotType);
      const onSubmit = () => {
        ForgotPost(forgotType).then((response) => {
          console.log(response);    
       if (response.data != undefined) {
             if (response.data.Response_code===800){
                alert('Enter valid email')
              }
              else if(response.data.Response_code===200){
                alert("verified")
                navigation.navigate(NAVIGATION_SCREENS.CHANGE_SCREEN)
              }
            
          }
          else{
            alert("Internet connection Faild")
          }
         
        })
      }
    
    return (
        <View style={globalstyles.container}>
            <View style={styles.forgot}>
                <ImageBackground
                    source={require('../../../../src/Assets/Images/Image_F.jpg')}
                    style={styles.background}>
                    <StatusBar
                        translucent
                        backgroundColor={COLOR.WHITE}
                        barStyle={COLOR.DARK_CONTENT} />
                    <View style={styles.main}>
                        <Text style={styles.Title}>{PAGE_CONTENT.APP_NAME}</Text>
                        <View style={globalstyles.textInput}>
                            <TextInput style={styles.text}
                                placeholder={PLACEHOLDER.EMAIL}
                                placeholderTextColor={COLOR.BLACK}
                                value={email}
                                onChangeText={validEmail => checkEmail(validEmail)}
                                underlineColorAndroid={BACKGROUND_COLORS.TRANSPARENT} />
                        </View>
                        <View>
                            {checkValidEmail ? (
                                <Text style={globalstyles.errorMessageText}>{ERROR_MESSAGE.EMAIL_INVALID}</Text>
                            ) : (
                                null
                            )}
                        </View>
                        <View>
                            <TouchableOpacity disabled={email == "" || checkValidEmail == true}
                                style={styles.button}
                                onPress={() => onSubmit()}>
                                <Text style={globalstyles.buttonText}>{PLACEHOLDER.NEXT_BUTTON}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}
//stylesheet for forgot screen
const styles = StyleSheet.create({
    //overall
    forgot: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    //background
    background: {
        width: "100%",
        height: "100%"
    },
    //app content
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60%',
        flex: 4,
    },
    //appTitle
    Title: {
        fontSize: 40,
        color: COLOR.ORANGERED,
        margin:20
    },
    
    //input-box text
    text: {
        color: COLOR.BLACK,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 23
    },
  
    //disabled button
    button: {
        height: 60,
        backgroundColor: COLOR.ORANGERED,
        width: 300,
        margin: 50,
        borderRadius: 30,
    },
    //Enable button
    button2: {
        height: 50,
        marginVertical: 40,
        backgroundColor: COLOR.ORANGERED,
        width: 300,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
});