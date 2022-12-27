import React, { useState ,useEffect} from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Appearance
} from 'react-native';
import { globalstyles } from '../../CommonStyles/Styles';
import {
    BACKGROUND_COLORS,
    COLOR, ERROR_MESSAGE,
    NAVIGATION_SCREENS,
    PAGE_CONTENT,
    PLACEHOLDER
} from '../../Utility/Constants';
import Regex from '../../Utility/Validation';
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme';

export default function Forgot({ navigation }) {
    //initializer
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidateEmail] = useState(false)
    const { Common, Fonts, Gutters } = useTheme()
    // Email validation
    const checkEmail = validEmail => {
        setEmail(validEmail)
        if (Regex.validateEmail_Forgot(email)) {
            setCheckValidateEmail(false);
        } else {
            setCheckValidateEmail(true);
        }
    };
    //Password validation
    const changePassword = () => {
        const checkPassword = checkEmail(email);
        if (!checkPassword) {
            navigation.navigate(NAVIGATION_SCREENS.CHANGE_SCREEN);
        } else {
            alert(checkPassword);
        }
    };
    //Themes
    const init = async () => {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
            await setDefaultTheme({ darkMode: true });
        } else {
            await setDefaultTheme({ theme: 'default', darkMode: null });
        }
    }
    useEffect(() => {
        init()
    })
    return (
        <View style={[Common.container,Gutters.container]}>
            <View style={[Gutters.Forgot]}>
                <ImageBackground
                    source={require('../../../../src/Assets/Images/Image_F.jpg')}
                    style={[Gutters.forgotBackground]}>
                    <StatusBar
                        translucent
                        backgroundColor={COLOR.WHITE}
                        barStyle={COLOR.DARK_CONTENT} />
                    <View style={[Gutters.forgotMain]}>
                        <Text style={[Common.forgotTitle, Gutters.forgotTitle, Fonts.forgotTitle]}>{PAGE_CONTENT.APP_NAME}</Text>
                        <View style={[Common.textInput,Gutters.textInput]}>
                            <TextInput style={[Common.forgotText, Gutters.forgotText, Fonts.forgotText]}
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
                                style={[Common.forgotButton, Gutters.forgotButton]}
                                onPress={changePassword}>
                                <Text style={[Common.buttonText,Gutters.buttonText]}>{PLACEHOLDER.NEXT_BUTTON}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}
