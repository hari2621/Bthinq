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
import {
    ERROR_MESSAGE,
    COLOR,
    BACKGROUND_COLORS,
    PAGE_CONTENT,
    PLACEHOLDER
} from '../../../Utility/Constants'; 
import Regex from '../../../Utility/Validation';

export default function Forgot({ navigation }) {
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidateEmail] = useState()
    // Email validation
    const checkEmail = validEmail => {
        setEmail(validEmail)
        if (Regex.validateEmail(email)) {
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
    return (
        <View style={styles.forgot}>
            <ImageBackground
                source={require('../../../assets/Image/Image_F.jpg')}
                style={styles.background}>
                <StatusBar
                    translucent
                    backgroundColor={COLOR.WHITE}
                    barStyle="light-content" />
                <View style={styles.main}>
                    <Text style={styles.Title}>{PAGE_CONTENT.APP_NAME}</Text>
                    <View style={styles.textInput}>
                        <TextInput style={styles.text}
                            placeholder={PLACEHOLDER.EMAIL}
                            placeholderTextColor={COLOR.BLACK}
                            value={email}
                            onChangeText={validEmail => checkEmail(validEmail)}
                            underlineColorAndroid={BACKGROUND_COLORS.TRANSPARENT} />
                    </View>
                    <View style={styles.errorMessage}>
                        {checkValidEmail ? (
                            <Text style={styles.textFailed}>{ERROR_MESSAGE.EMAIL_INVALID}</Text>
                        ) : (
                            null
                        )}
                    </View>
                    <View>
                        <TouchableOpacity disabled={email == "" || checkValidEmail == true}
                            style={styles.button}
                            onPress={changePassword}>
                            <Text style={styles.btntxt}>{PLACEHOLDER.NEXT_BUTTON}</Text>
                        </TouchableOpacity>
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
        color: COLOR.ORANGERED,
    },
    //input-box 
    textInput: {
        height: 50,
        borderRadius: 100,
        width: 300,
        borderColor: COLOR.BLACK,
        borderWidth: 2,
        marginTop: 20,
        color: COLOR.BLACK
    },
    //input-box text
    text: {

        color: COLOR.BLACK,
        textAlign: 'center',
        marginVertical: 7,
        justifyContent: 'center',
        fontSize: 23
    },
    //Error Message
    textFailed: {
        color: COLOR.RED,
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
    //Enable & disable button
    btntxt: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        fontSize: 25
    },
});