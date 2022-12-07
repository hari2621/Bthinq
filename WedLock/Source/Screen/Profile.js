import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


export default function Profile(){
    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                  
                  <Image style={styles.img} source={require('../Navigation/images/f1.png')}/>
                </View>
                <Image style={styles.avatar} source={require('../Navigation/images/testing.png')}/>
                <View style={styles.body}>
                  <View style={styles.bodyContent}>
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
            </View>
          );
        }
      
      
      const styles = StyleSheet.create({
        header:{
          
          height:140,
          borderRadius:1,
          opacity:0.5
        },
        avatar: {
          width: 130,
          height: 130,
          borderRadius: 68,
          borderWidth: 3,
          borderColor: "black",
          alignSelf:'center',
          position: 'absolute',
          marginTop:70,
          
        },
        Text1:{
           fontSize:30,
           marginLeft:120,
           marginTop:10,
           fontWeight:'500',
        },
       
        body:{
          marginTop:70,
        },
        bodyContent: {
          flex: 1,
          alignItems: 'center',
          padding:20,
        },
        name:{
          fontSize:28,
          color: "#696969",
          fontWeight: ""
        },
       

        buttonContainer: {
          marginTop:10,
          height:45,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20,
          width:250,
          borderRadius:30,
          backgroundColor: "#f77d3b",
         
          
        },
      });
      
        