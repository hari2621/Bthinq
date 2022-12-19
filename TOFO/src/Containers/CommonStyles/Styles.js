import { StyleSheet } from "react-native";
import { COLOR,BACKGROUND_COLORS } from "../Utility/Constants";

export const globalstyles = StyleSheet.create({
    //all screen parent styles
    container:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: COLOR.WHITE
},
//input-box for Forgot Screen
textInput: {
    justifyContent: "center",
    backgroundColor: BACKGROUND_COLORS.WHITE,
    borderRadius:30,
    width: 300,
    borderColor: COLOR.BLACK,
    borderWidth:1,
    color: COLOR.BLACK
},
buttonText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    fontSize: 25
  },
    //error message field for Login,signup,forgot and changepassword screen
    errorMessageText: {
        alignSelf: 'center',
        color: COLOR.RED,
        fontSize: 15,
        marginLeft: 10
      },


});