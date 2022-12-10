import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { ERROR_MESSAGE, FORGOT_VALIDATION } from '../../../Utility/constant';
import { FORGOT_COLOR } from '../../../Utility/constant';
import { FORGOT_TITLE } from '../../../Utility/constant';

export default function Forgot({ navigation }) {
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidateEmail] = useState()
    const checkEmail = validEmail => {
        let regex_Forgot = FORGOT_VALIDATION.EMAIL;
        setEmail(validEmail)
        if (regex_Forgot.test(validEmail)) {
            setCheckValidateEmail(false);
        } else {
            setCheckValidateEmail(true);
        }
    };
    const changePassword = () => {
        const checkPassword = checkEmail(email);
        if (!checkPassword) {
            navigation.navigate("ChangePassword");
        } else {
            alert(checkPassword);
        }
    };
    return (
        <View style={styles.forgot}>
            <ImageBackground source={require('../../../Image/123.jpg')} style={styles.background}>
                <StatusBar translucent backgroundColor={FORGOT_COLOR.WHITE} barStyle="light-content" />
                <View style={styles.main}>
                    <Text style={styles.Title}>{FORGOT_TITLE.TITLE_TEXT}</Text>
                    <View style={styles.textInput}>
                        <TextInput style={styles.text}
                            placeholder={ERROR_MESSAGE.ENTER_EMAILID} placeholderTextColor={FORGOT_COLOR.BLACK} value={email}
                            onChangeText={validEmail => checkEmail(validEmail)}
                            underlineColorAndroid={'transparent'} />
                    </View>
                    <View style={styles.errorMessage}>
                        {checkValidEmail ? (
                            <Text style={styles.textFailed}>{ERROR_MESSAGE.EMAIL_INVALID}</Text>
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
                                    onPress={changePassword}
                                >
                                    <Text style={styles.btntxt}>Next</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button2} onPress={changePassword}>
                                    <Text style={styles.btntxt}>Next</Text>
                                </TouchableOpacity>
                            )}
                    </View>
                </View>
            </ImageBackground>
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
        color: FORGOT_COLOR.ORANGERED,
    },
    //input-box 
    textInput: {
        height: 50,
        borderRadius: 100,
        width: 300,
        borderColor: FORGOT_COLOR.BLACK,
        borderWidth: 2,
        marginTop: 20,
        color: FORGOT_COLOR.BLACK
    },
    //input-box text
    text: {

        color: FORGOT_COLOR.BLACK,
        textAlign: 'center',
        marginVertical: 7,
        justifyContent: 'center',
        fontSize: 23
    },
    //Error Message
    textFailed: {
        color: FORGOT_COLOR.RED,
    },
    //disabled button
    button: {
        height: 60,
        backgroundColor: FORGOT_COLOR.ORANGERED,
        width: 300,
        margin: 50,
        borderRadius: 30,
    },
    //Enable button
    button2: {
        height: 50,
        marginVertical: 40,
        backgroundColor: FORGOT_COLOR.ORANGERED,
        width: 300,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Enable & disable button
    btntxt: {
        color: FORGOT_COLOR.WHITE,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        fontSize: 25
    },
});