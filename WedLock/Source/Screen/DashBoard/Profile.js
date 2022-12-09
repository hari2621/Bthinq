import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { BACKGROUND_COLOUR, PROFILE_FIELD } from '../../../Utility/constant';
import { Style } from '../../Common/Style';
export default function Profile({ navigation }) {
  return (
    <ImageBackground style={styles.img} source={require('../../../Image/f1.png')}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../../../Image/testing.png')} />
        <View style={styles.body}>
          <TouchableOpacity style={Style.buttonContainer}>
            <Text> {PROFILE_FIELD.PROFILE}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.buttonContainer}>
            <Text>{PROFILE_FIELD.FEEDBACK} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.buttonContainer}>
            <Text>{PROFILE_FIELD.ABOUT_US}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.buttonContainer} onPress={() => navigation.replace("Login")}>
            <Text>{PROFILE_FIELD.LOG_OUT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 68,
    borderWidth: 3,
    borderColor: BACKGROUND_COLOUR.BLACK,
    marginBottom: "20%",
  }
});







