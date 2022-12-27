import { StyleSheet } from "react-native"
import { COLOR } from "../../Variables"
export default function ( ...args) {
  return StyleSheet.create({
    container:{ 
        backgroundColor: COLOR.BLACK
    },
    textInput: {
        backgroundColor: COLOR.WHITE,
        borderColor: COLOR.BLACK,
        color: COLOR.BLACK
    },
     //appTitle
    forgotTitle: {
      color: COLOR.ORANGE,
  },
  //input-box text
  forgotText: {
      color: COLOR.WHITE,
  }
  })
}
