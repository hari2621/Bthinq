import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { BACKGROUND_COLOUR, PROFILE_FIELD } from '../../../Utility/Constant';

export default function Profile({ navigation }) {
  return (
    <ImageBackground style={styles.img} source={require('../../../assets/Image/Profile_bg.png')}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require('../../../assets/Image/testing.png')} />
        <View style={styles.body}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text> {PROFILE_FIELD.PROFILE}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>{PROFILE_FIELD.FEEDBACK} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>{PROFILE_FIELD.ABOUT_US}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.replace("Login")}>
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
    borderColor: BACKGROUND_COLORS.BLACK,
    marginBottom: "20%",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor:BACKGROUND_COLORS.ORANGE_,
  }
});







