import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
  } from 'react-native';
  export default function Profile() {
    return (
      <ImageBackground style={styles.img} source={require('../Navigation/images/f1.png')}>
        <View style={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <View>
          </View>
          <Image style={styles.avatar} source={require('../Navigation/images/testing.png')} />
          <View style={styles.body}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Profile details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Feedback </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text onPress={() => navigation.replace("Login")}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
  const styles = StyleSheet.create({
    header: {
      //  height:140,
      //  width:150,
      // borderRadius:1,
      // opacity:0.5
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 68,
      borderWidth: 3,
      borderColor: "black",
      marginBottom: "20%",
      // marginTop:"-50%"
      // alignSelf:'center',
      //position: 'absolute',
      //  marginTop:70,
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      //  flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: "#F77D3B",
    },
  });
  
  
  
  
  
  
  
  